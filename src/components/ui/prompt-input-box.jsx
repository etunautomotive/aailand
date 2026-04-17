'use client'

import React, { useState, useRef, useEffect } from 'react'
import { ArrowUp, Paperclip, Mic, StopCircle, Globe, BrainCog, FolderCode, X } from 'lucide-react'

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

// Button Component
const Button = React.forwardRef(({ className, variant = 'default', size = 'default', ...props }, ref) => {
  const variantClasses = {
    default: 'bg-white hover:bg-white/80 text-black',
    outline: 'border border-[#444444] bg-transparent hover:bg-[#3A3A40]',
    ghost: 'bg-transparent hover:bg-[#3A3A40]',
  }
  const sizeClasses = {
    default: 'h-10 px-4 py-2',
    sm: 'h-8 px-3 text-sm',
    lg: 'h-12 px-6',
    icon: 'h-8 w-8 rounded-full aspect-[1/1]',
  }
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = 'Button'

// Custom Divider Component
const CustomDivider = () => (
  <div className="relative h-6 w-[1.5px] mx-1">
    <div
      className="absolute inset-0 bg-gradient-to-t from-transparent via-[#9b87f5]/70 to-transparent rounded-full"
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 140% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 60%, -40% 50%, 0% 40%)",
      }}
    />
  </div>
)

// Voice Recorder Component
const VoiceRecorder = ({ isRecording, onStartRecording, onStopRecording }) => {
  const [time, setTime] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
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
    <div className={cn('flex flex-col items-center justify-center w-full transition-all duration-300 py-3', isRecording ? 'opacity-100' : 'opacity-0 h-0')}>
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
        <span className="font-mono text-sm text-white/80">{formatTime(time)}</span>
      </div>
      <div className="w-full h-10 flex items-center justify-center gap-0.5 px-4">
        {[...Array(32)].map((_, i) => (
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

// Main PromptInputBox Component
export const PromptInputBox = React.forwardRef(({ onSend = () => {}, isLoading = false, placeholder = 'Ask about our AI sales solution...', className }, ref) => {
  const [input, setInput] = useState('')
  const [files, setFiles] = useState([])
  const [filePreviews, setFilePreviews] = useState({})
  const [selectedImage, setSelectedImage] = useState(null)
  const [isRecording, setIsRecording] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showThink, setShowThink] = useState(false)
  const [showCanvas, setShowCanvas] = useState(false)
  const uploadInputRef = useRef(null)
  const promptBoxRef = useRef(null)

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

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const droppedFiles = Array.from(e.dataTransfer.files)
    const imageFiles = droppedFiles.filter((file) => isImageFile(file))
    if (imageFiles.length > 0) processFile(imageFiles[0])
  }

  const handleRemoveFile = (index) => {
    const fileToRemove = files[index]
    if (fileToRemove && filePreviews[fileToRemove.name]) setFilePreviews({})
    setFiles([])
  }

  const handlePaste = (e) => {
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
  }

  useEffect(() => {
    document.addEventListener('paste', handlePaste)
    return () => document.removeEventListener('paste', handlePaste)
  }, [])

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
        'rounded-3xl border-2 border-secondary/30 bg-white p-4 shadow-lg transition-all duration-300 ease-in-out',
        isRecording && 'border-red-500/70',
        className
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {files.length > 0 && !isRecording && (
        <div className="flex flex-wrap gap-2 p-0 pb-3 transition-all duration-300">
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

      <div className={cn('transition-all duration-300', isRecording ? 'h-0 overflow-hidden opacity-0' : 'opacity-100')}>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleSubmit()
            }
          }}
          placeholder={
            showSearch
              ? 'Search the web...'
              : showThink
              ? 'Think deeply...'
              : showCanvas
              ? 'Create on canvas...'
              : placeholder
          }
          className="text-secondary placeholder:text-secondary/50"
          disabled={isLoading || isRecording}
        />
      </div>

      {isRecording && (
        <VoiceRecorder
          isRecording={isRecording}
          onStartRecording={handleStartRecording}
          onStopRecording={handleStopRecording}
        />
      )}

      <div className="flex items-center justify-between gap-2 pt-3">
        <div className={cn('flex items-center gap-1 transition-opacity duration-300', isRecording ? 'opacity-0 invisible h-0' : 'opacity-100 visible')}>
          <button
            onClick={() => uploadInputRef.current?.click()}
            className="flex h-8 w-8 text-secondary/60 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-tertiary hover:text-secondary"
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
              onClick={() => setShowSearch((prev) => !prev)}
              className={cn(
                'rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8',
                showSearch
                  ? 'bg-primary/15 border-primary text-primary'
                  : 'bg-transparent border-transparent text-secondary/60 hover:text-secondary'
              )}
            >
              <Globe className="w-4 h-4" />
              {showSearch && <span className="text-xs overflow-hidden whitespace-nowrap text-primary flex-shrink-0">Search</span>}
            </button>

            <CustomDivider />

            <button
              type="button"
              onClick={() => setShowThink((prev) => !prev)}
              className={cn(
                'rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8',
                showThink
                  ? 'bg-purple-500/15 border-purple-500 text-purple-500'
                  : 'bg-transparent border-transparent text-secondary/60 hover:text-secondary'
              )}
            >
              <BrainCog className="w-4 h-4" />
              {showThink && <span className="text-xs overflow-hidden whitespace-nowrap text-purple-500 flex-shrink-0">Think</span>}
            </button>

            <CustomDivider />

            <button
              type="button"
              onClick={() => setShowCanvas((prev) => !prev)}
              className={cn(
                'rounded-full transition-all flex items-center gap-1 px-2 py-1 border h-8',
                showCanvas
                  ? 'bg-orange-500/15 border-orange-500 text-orange-500'
                  : 'bg-transparent border-transparent text-secondary/60 hover:text-secondary'
              )}
            >
              <FolderCode className="w-4 h-4" />
              {showCanvas && <span className="text-xs overflow-hidden whitespace-nowrap text-orange-500 flex-shrink-0">Canvas</span>}
            </button>
          </div>
        </div>

        <Button
          variant="default"
          size="icon"
          className={cn(
            'h-8 w-8 rounded-full transition-all duration-200',
            isRecording
              ? 'bg-transparent hover:bg-red-100 text-red-500 hover:text-red-600'
              : hasContent
              ? 'bg-primary hover:bg-primary/90 text-white'
              : 'bg-transparent hover:bg-tertiary text-secondary/60 hover:text-secondary'
          )}
          onClick={() => {
            if (isRecording) setIsRecording(false)
            else if (hasContent) handleSubmit()
            else setIsRecording(true)
          }}
          disabled={isLoading && !hasContent}
        >
          {isLoading ? (
            <div className="h-4 w-4 rounded-sm bg-secondary animate-pulse" />
          ) : isRecording ? (
            <StopCircle className="h-5 w-5 text-red-500" />
          ) : hasContent ? (
            <ArrowUp className="h-4 w-4 text-white" />
          ) : (
            <Mic className="h-5 w-5 text-secondary transition-colors" />
          )}
        </Button>
      </div>
    </div>
  )
})
PromptInputBox.displayName = 'PromptInputBox'
