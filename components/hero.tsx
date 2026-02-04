'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-br from-background via-background to-muted relative overflow-hidden">
			<div className="absolute inset-0 opacity-40 md:opacity-50 z-0">
				<Image
					src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/If%20you%20stay%20in%20your%20conform%20zone%2C%20that%E2%80%99s%20where%20you%20fail%2C%20so%20you%20need%20to%20get%20comportable%20being%20uncomportable%20if%20you%20want%20to%20be%20%284%29-TtMEoupOOOkO94bq7SoCdmnBzdbgHj.png"
					alt="Saturn planet - success motivation"
					fill
					className="object-cover"
					priority
				/>
			</div>
			<div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
				<div className="space-y-4 bg-gradient-to-b from-background/80 via-background/70 to-background/60 rounded-lg p-8 md:p-12 backdrop-blur-sm">
				<div className="space-y-4">
					<h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
						Crafting <span className="text-accent italic">UI/UX</span> &
						building experiences
					</h1>
					<p className="text-xl md:text-2xl text-muted-foreground">
						I design and develop pixel-perfect digital products that blend
						thoughtful design with robust engineering.
					</p>
				</div>
				</div>

				<div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
					<Button
						size="lg"
						className="bg-primary text-primary-foreground hover:bg-primary/90"
						onClick={() =>
							document
								.getElementById('contact')
								?.scrollIntoView({ behavior: 'smooth' })
						}
					>
						Get in touch <ArrowRight className="ml-2 w-4 h-4" />
					</Button>
					<Button
						size="lg"
						variant="outline"
						onClick={() =>
							document
								.getElementById('works')
								?.scrollIntoView({ behavior: 'smooth' })
						}
					>
						View my work
					</Button>
				</div>

				<div className="pt-12 flex justify-center gap-8 md:gap-12">
					<div className="text-center">
						<p className="text-3xl md:text-4xl font-bold text-foreground">
							50+
						</p>
						<p className="text-muted-foreground">Projects Completed</p>
					</div>
					<div className="text-center">
						<p className="text-3xl md:text-4xl font-bold text-foreground">5+</p>
						<p className="text-muted-foreground">Years Experience</p>
					</div>
					<div className="text-center">
						<p className="text-3xl md:text-4xl font-bold text-foreground">
							30+
						</p>
						<p className="text-muted-foreground">Happy Clients</p>
					</div>
				</div>
			</div>
		</section>
	);
}
