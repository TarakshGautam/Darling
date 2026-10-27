import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import config from "../config";

export default function Timeline() {
  // Config se photos uthayenge, agar nahi hai toh dummy array use karenge
  const photos = config.timeline || [
    { id: 1, caption: "That day you laughed so hard at the bus stop." },
    { id: 2, caption: "You defending your Maggi recipe like a PhD thesis." },
    { id: 3, caption: "First time you fell asleep on my shoulder." }
  ];

  return (
    <section className="py-24 bg-blush/20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-script text-wine mb-4">Our Little Moments</h2>
          <p className="text-ink/60 font-body">Some memories that live rent-free in my head.</p>
        </motion.div>

        <div className="space-y-24">
          {photos.map((photo, index) => (
            <motion.div 
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] bg-white rounded-2xl shadow-xl border-4 border-white overflow-hidden relative group">
                  {/* Agar image hai toh yahan aayegi, warna placeholder */}
                  {photo.src ? (
                    <img src={photo.src} alt="Memory" className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream/50 text-rose/60 group-hover:bg-cream/80 transition-colors">
                      <ImageIcon size={48} className="mb-2" />
                      <span className="text-sm font-medium">Add photo here</span>
                      <span className="text-xs opacity-70 mt-1">(public/images/photo{index + 1}.jpg)</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Caption */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className={`bg-white/60 p-6 rounded-2xl shadow-sm border border-white backdrop-blur-sm ${index % 2 !== 0 ? 'md:text-right' : ''}`}>
                  <p className="text-lg md:text-xl text-wine font-body italic">
                    "{photo.caption}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}