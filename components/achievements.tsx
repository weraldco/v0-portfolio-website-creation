'use client'

import { Award, Star, Trophy, Target } from 'lucide-react'

const achievements = [
  {
    icon: Trophy,
    title: 'Award Winner',
    description: 'Recognized for excellence in web design and development at industry conferences and competitions.',
    stat: '12+',
  },
  {
    icon: Star,
    title: 'Client Satisfaction',
    description: 'Maintained 98% client satisfaction rate with consistent delivery of high-quality projects.',
    stat: '98%',
  },
  {
    icon: Target,
    title: 'Projects Delivered',
    description: 'Successfully completed and launched over 50 projects across various industries and scales.',
    stat: '50+',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Featured in leading tech publications and recognized as a thought leader in the community.',
    stat: '25+',
  },
]

export function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Achievements</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognition that showcase my commitment to excellence and continuous growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-10 h-10 text-accent" />
                  <div className="text-3xl font-bold text-accent">{achievement.stat}</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
