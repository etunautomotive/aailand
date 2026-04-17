'use client'

import React, { useState, useRef } from 'react'
import { Send, X, ArrowUp, Paperclip, Square, StopCircle, Mic, Globe, BrainCog, FolderCode } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const cn = (...classes) => classes.filter(Boolean).join(' ')

// Textarea Component
const Textarea = React.forwardRef(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      'flex w-full rounded-md border-none bg-transparent px-3 py-2.5 text-base text-gray-100 placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 min-h-[44px] resize-none',
      className
    )}
    ref={ref}
    rows={1}
    {...props}
  />
))
Textarea.displayName = 'Textarea'

// VoiceRecorder Component
const VoiceRecorder = ({ isRecording, onStartRecording, onStopRecording, visualizerBars = 32 }) => {
  const [time, setTime] = React.useState(0)
  const timerRef = React.useRef(null)

  React.useEffect(() => {
    if (isRecording) {
      onStartRecording()
      timerRef.current = setInterval(() => setTime((t) => t + 1), 1000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      onStopRecording(time)
      setTime(0)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [isRecording, time, onStartRecording, onStopRecording])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center w-full transition-all duration-300 py-3',
        isRecording ? 'opacity-100' : 'opacity-0 h-0'
      )}
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        <span className="font-mono text-sm text-white/80">{formatTime(time)}</span>
      </div>
      <div className="w-full h-10 flex items-center justify-center gap-0.5 px-4">
        {[...Array(visualizerBars)].map((_, i) => (
          <div
            key={i}
            className="w-0.5 rounded-full bg-white/50 animate-pulse"
            style={{
              height: `${Math.max(15, Math.random() * 100)}%`,
              animationDelay: `${i * 0.05}s`,
              animationDuration: `${0.5 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

// Custom Divider Component
const CustomDivider = () => (
  <div className="relative h-6 w-[1.5px] mx-1">
    <div
      className="absolute inset-0 bg-[#9b87f5]/70 rounded-full"
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 40%, 140% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 60%, -40% 50%, 0% 40%)',
      }}
    />
  </div>
)

// Main ChatInterface Component
export const ChatInterface = React.forwardRef((props, ref) => {
  const { onSend = () => {}, isLoading = false, placeholder = 'Type your message here...', className } = props
  const [input, setInput] = React.useState('')
  const [files, setFiles] = React.useState([])
  const [filePreviews, setFilePreviews] = React.useState({})
  const [selectedImage, setSelectedImage] = React.useState(null)
  const [isRecording, setIsRecording] = React.useState(false)
  const [showSearch, setShowSearch] = React.useState(false)
  const [showThink, setShowThink] = React.useState(false)
  const [showCanvas, setShowCanvas] = React.useState(false)
  const uploadInputRef = React.useRef(null)
  const promptBoxRef = React.useRef(null)

  const handleToggleChange = (value) => {
    if (value === 'search') {
      setShowSearch((prev) => !prev)
      setShowThink(false)
    } else if (value === 'think') {
      setShowThink((prev) => !prev)
      setShowSearch(false)
    }
  }

  const handleCanvasToggle = () => setShowCanvas((prev) => !prev)

  const isImageFile = (file) => file.type.startsWith('image/')

  const processFile = (file) => {
    if (!isImageFile(file)) {
      console.log('Only image files are allowed')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      console.log('File too large (max 10MB)')
      return
    }
    setFiles([file])
    const reader = new FileReader()
    reader.onload = (e) => setFilePreviews({ [file.name]: e.target?.result })
    reader.readAsDataURL(file)
  }

  const handleDragOver = React.useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDragLeave = React.useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleDrop = React.useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    const files = Array.from(e.dataTransfer.files)
    const imageFiles = files.filter((file) => isImageFile(file))
    if (imageFiles.length > 0) processFile(imageFiles[0])
  }, [])

  const handleRemoveFile = (index) => {
    const fileToRemove = files[index]
    if (fileToRemove && filePreviews[fileToRemove.name]) setFilePreviews({})
    setFiles([])
  }

  const handlePaste = React.useCallback((e) => {
    const items = e.clipboardData?.items
    if (!items) return
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        const file = items[i].getAsFile()
        if (file) {
          e.preventDefault()
          processFile(file)
          break
        }
      }
    }
  }, [])

  React.useEffect(() => {
    document.addEventListener('paste', handlePaste)
    return () => document.removeEventListener('paste', handlePaste)
  }, [handlePaste])

  const handleSubmit = () => {
    if (input.trim() || files.length > 0) {
      let messagePrefix = ''
      if (showSearch) messagePrefix = '[Search: '
      else if (showThink) messagePrefix = '[Think: '
      else if (showCanvas) messagePrefix = '[Canvas: '
      const formattedInput = messagePrefix ? `${messagePrefix}${input}]` : input
      onSend(formattedInput, files)
      setInput('')
      setFiles([])
      setFilePreviews({})
    }
  }

  const handleStartRecording = () => console.log('Started recording')

  const handleStopRecording = (duration) => {
    console.log(`Stopped recording after ${duration} seconds`)
    setIsRecording(false)
    onSend(`[Voice message - ${duration} seconds]`, [])
  }

  const hasContent = input.trim() !== '' || files.length > 0

  return (
    <div
      ref={ref || promptBoxRef}
      className={cn(
        'rounded-3xl border border-[#444444] bg-[#1F2023] p-2 shadow-[0_8px_30px_rgba(0,0,0,0.24)] transition-all duration-300',
        isRecording && 'border-red-500/70',
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {files.length > 0 && !isRecording && (
        <div className="flex flex-wrap gap-2 p-0 pb-1 transition-all duration-300">
          {files.map((file, index) => (
            <div key={index} className="relative group">
              {file.type.startsWith('image/') && filePreviews[file.name] && (
                <div
                  className="w-16 h-16 rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedImage(filePreviews[file.name])}
                >
                  <img
                    src={filePreviews[file.name]}
                    alt={file.name}
                    className="h-full w-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemoveFile(index)
                    }}
                    className="absolute top-1 right-1 rounded-full bg-black/70 p-0.5 opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3 text-white" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div
        className={cn(
          'transition-all duration-300',
          isRecording ? 'h-0 overflow-hidden opacity-0' : 'opacity-100'
        )}
      >
        <Textarea
          placeholder={
            showSearch
              ? 'Search the web...'
              : showThink
              ? 'Think deeply...'
              : showCanvas
              ? 'Create on canvas...'
              : placeholder
          }
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit()
            }
          }}
          className="text-base"
        />
      </div>

      {isRecording && (
        <VoiceRecorder
          isRecording={isRecording}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
        />
      )}

      <div className="flex items-center justify-between gap-2 p-0 pt-2">
        <div
          className={cn(
            'flex items-center gap-1 transition-opacity duration-300',
            isRecording ? 'opacity-0 invisible h-0' : 'opacity-100 visible'
          )}
        >
          <button
            onClick={() => uploadInputRef.current?.click()}
            className="flex h-8 w-8 text-[#9CA3AF] cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-gray-600/30 hover:text-[#D1D5DB]"
            disabled={isRecording}
          >
            <Paperclip className="h-5 w-5 transition-colors" />
            <input
              ref={uploadInputRef}
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) processFile(e.target.files[0])
                if (e.target) e.target.value = ''
              }}
              accept="image/*"
            />
          </button>

          <div className="flex items-center">
            <button
              type="button"
              onClick={() => handleToggleChange('search')}
              className={cn(
                'rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8',
                showSearch
                  ? 'bg-[#1EAEDB]/15 border-[#1EAEDB] text-[#1EAEDB]'
                  : 'bg-transparent border-transparent text-[#9CA3AF] hover:text-[#D1D5DB]'
              )}
            >
              <motion.div
                animate={{ rotate: showSearch ? 360 : 0, scale: showSearch ? 1.1 : 1 }}
                whileHover={{ rotate: showSearch ? 360 : 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              >
                <Globe className={cn('w-4 h-4', showSearch ? 'text-[#1EAEDB]' : 'text-inherit')} />
              </motion.div>
              <AnimatePresence>
                {showSearch && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs overflow-hidden whitespace-nowrap text-[#1EAEDB] flex-shrink-0"
                  >
                    Search
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <CustomDivider />

            <button
              type="button"
              onClick={() => handleToggleChange('think')}
              className={cn(
                'rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8',
                showThink
                  ? 'bg-[#8B5CF6]/15 border-[#8B5CF6] text-[#8B5CF6]'
                  : 'bg-transparent border-transparent text-[#9CA3AF] hover:text-[#D1D5DB]'
              )}
            >
              <motion.div
                animate={{ rotate: showThink ? 360 : 0, scale: showThink ? 1.1 : 1 }}
                whileHover={{ rotate: showThink ? 360 : 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              >
                <BrainCog className={cn('w-4 h-4', showThink ? 'text-[#8B5CF6]' : 'text-inherit')} />
              </motion.div>
              <AnimatePresence>
                {showThink && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs overflow-hidden whitespace-nowrap text-[#8B5CF6] flex-shrink-0"
                  >
                    Think
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <CustomDivider />

            <button
              type="button"
              onClick={handleCanvasToggle}
              className={cn(
                'rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8',
                showCanvas
                  ? 'bg-[#F97316]/15 border-[#F97316] text-[#F97316]'
                  : 'bg-transparent border-transparent text-[#9CA3AF] hover:text-[#D1D5DB]'
              )}
            >
              <motion.div
                animate={{ rotate: showCanvas ? 360 : 0, scale: showCanvas ? 1.1 : 1 }}
                whileHover={{ rotate: showCanvas ? 360 : 15, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              >
                <FolderCode className={cn('w-4 h-4', showCanvas ? 'text-[#F97316]' : 'text-inherit')} />
              </motion.div>
              <AnimatePresence>
                {showCanvas && (
                  <motion.span
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 'auto', opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs overflow-hidden whitespace-nowrap text-[#F97316] flex-shrink-0"
                  >
                    Canvas
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        <button
          className={cn(
            'h-8 w-8 rounded-full transition-all duration-200 flex items-center justify-center',
            isRecording
              ? 'bg-transparent hover:bg-gray-600/30 text-red-500 hover:text-red-400'
              : hasContent
              ? 'bg-white hover:bg-white/80 text-[#1F2023]'
              : 'bg-transparent hover:bg-gray-600/30 text-[#9CA3AF] hover:text-[#D1D5DB]'
          )}
          onClick={() => {
            if (isRecording) setIsRecording(false)
            else if (hasContent) handleSubmit()
            else setIsRecording(true)
          }}
          disabled={isLoading && !hasContent}
        >
          {isLoading ? (
            <Square className="h-4 w-4 fill-[#1F2023] animate-pulse" />
          ) : isRecording ? (
            <StopCircle className="h-5 w-5 text-red-500" />
          ) : hasContent ? (
            <ArrowUp className="h-4 w-4 text-[#1F2023]" />
          ) : (
            <Mic className="h-5 w-5 text-[#1F2023] transition-colors" />
          )}
        </button>
      </div>
    </div>
  )
})
ChatInterface.displayName = 'ChatInterface'
