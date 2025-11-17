import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Smartphone, Zap, Target, BookOpen, FileText, Mic, Activity, ClipboardCheck, Pill } from "lucide-react"

export default function SuitePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted to-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                The Complete ProMedixEMS<sup>TM</sup> Suite
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                From EMT-B to Paramedic — comprehensive training tools for every level of EMS education
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Suite - All 10 Apps */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              All ProMedixEMS<sup>TM</sup> Platform Apps
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Comprehensive education and training tools for every EMS provider
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Core EMT */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <Smartphone className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Core EMT</CardTitle>
                <CardDescription>
                  Essential training for the EMT-B student
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Advance AEMT */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-secondary/20">
              <CardHeader>
                <Zap className="h-10 w-10 mb-2 text-secondary" />
                <CardTitle>Advance AEMT</CardTitle>
                <CardDescription>
                  Next-level skills for the advancing provider
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Paramedic Elite */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <Target className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>Paramedic Elite</CardTitle>
                <CardDescription>
                  Advanced neuro, cardiac, trauma, and critical care mastery
                </CardDescription>
              </CardHeader>
            </Card>

            {/* FlashLearn */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-accent/20">
              <CardHeader>
                <BookOpen className="h-10 w-10 mb-2 text-accent" />
                <CardTitle>FlashLearn</CardTitle>
                <CardDescription>
                  Fast, focused, spaced-repetition EMS study
                </CardDescription>
              </CardHeader>
            </Card>

            {/* PCR Lab */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <FileText className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>PCR Lab</CardTitle>
                <CardDescription>
                  Realistic case-based documentation training
                </CardDescription>
              </CardHeader>
            </Card>

            {/* VoiceNotes */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-secondary/20">
              <CardHeader>
                <Mic className="h-10 w-10 mb-2 text-secondary" />
                <CardTitle>VoiceNotes</CardTitle>
                <CardDescription>
                  Lecture recording + instant transcription built for EMS
                </CardDescription>
              </CardHeader>
            </Card>

            {/* RhythmLab */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <Activity className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>RhythmLab</CardTitle>
                <CardDescription>
                  Master ECG interpretation, one rhythm at a time
                </CardDescription>
              </CardHeader>
            </Card>

            {/* ScenarioDeck */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-accent/20">
              <CardHeader>
                <Target className="h-10 w-10 mb-2 text-accent" />
                <CardTitle>ScenarioDeck</CardTitle>
                <CardDescription>
                  High-yield medical and trauma simulations on demand
                </CardDescription>
              </CardHeader>
            </Card>

            {/* SkillCheck */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-primary/20">
              <CardHeader>
                <ClipboardCheck className="h-10 w-10 mb-2 text-primary" />
                <CardTitle>SkillCheck</CardTitle>
                <CardDescription>
                  Track and reinforce essential EMT/AEMT/Medic skills
                </CardDescription>
              </CardHeader>
            </Card>

            {/* MedicationsX */}
            <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 border-secondary/20">
              <CardHeader>
                <Pill className="h-10 w-10 mb-2 text-secondary" />
                <CardTitle>MedicationsX</CardTitle>
                <CardDescription>
                  Essential EMS pharmacology, simplified
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Built for Success
              </h2>
              <p className="text-muted-foreground md:text-xl">
                ProMedixEMS Suite is designed with input from experienced EMS educators and 
                successful EMT-B students. Our tools have helped thousands pass their certification 
                exams and excel in their EMS careers.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                  <span>Updated regularly with latest protocols</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                  <span>Mobile and desktop compatible</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                  <span>Offline access available</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">✓</span>
                  <span>Progress tracking and analytics</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8 flex items-center justify-center min-h-[300px]">
              <p className="text-center text-muted-foreground italic">
                [Placeholder for product screenshot or demo video]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                Join ProMedixEMS today and access all suite features
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">Contact Sales</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">See Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
