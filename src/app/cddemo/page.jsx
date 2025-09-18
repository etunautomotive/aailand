import VSLDemo from "@/common/component/vsldemo/vsl-demo";

export default function CDDemoPage() {
  return (
    <div className="flex justify-center w-full overflow-hidden">
      <div className="w-full max-w-[1500px] mx-auto overflow-hidden">
        <VSLDemo 
          calendlyUrl="https://calendly.com/wes-automotiveai/automotive-ai-demo-canada-drives?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=c175ff"
          useCalendlyInlineWidget={true}
        />
      </div>
    </div>
  );
}
