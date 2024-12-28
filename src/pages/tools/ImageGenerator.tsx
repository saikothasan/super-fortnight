import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientBackground from '../../components/ui/GradientBackground';
import AnimatedCard from '../../components/ui/AnimatedCard';
import ToolHero from '../../components/tools/ToolHero';
import ImageGeneratorDemo from '../../components/tools/demo/ImageGeneratorDemo';
import PricingTable from '../../components/tools/PricingTable';
import { aiTools } from '../../data/aiTools';

const ImageGenerator = () => {
  const tool = aiTools.find(t => t.id === 'image-generator')!;
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <GradientBackground>
      <div className="min-h-screen">
        <ToolHero tool={tool} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div ref={ref}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Try It Out</h2>
              <AnimatedCard>
                <ImageGeneratorDemo />
              </AnimatedCard>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Features</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {tool.features.map((feature, index) => (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <p className="text-white">{feature}</p>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Pricing</h2>
              <AnimatedCard>
                <PricingTable pricing={tool.pricing} />
              </AnimatedCard>
            </div>
          </motion.div>
        </div>
      </div>
    </GradientBackground>
  );
};

export default ImageGenerator;