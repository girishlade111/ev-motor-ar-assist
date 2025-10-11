import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Eye, FileText, Gauge, Zap, Cpu, Database, BrainCircuit } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-lg bg-blue-50 px-3 py-1 text-sm text-blue-600 mb-2 w-fit">
                  <Zap className="mr-1 h-4 w-4" />
                  <span>Next-gen EV maintenance technology</span>
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    EV Motor Maintenance <span className="text-blue-600">Simplified</span> with AR
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    The intelligent AR assistant that helps technicians diagnose and repair EV motors with precision,
                    reducing downtime and extending motor life.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/diagnose">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Launch AR Diagnostics
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline">View Dashboard</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="EV Motor with AR overlay"
                    width={600}
                    height={600}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg text-center">
                    <div className="text-green-400 font-medium">NORMAL</div>
                    <div className="text-sm">No issues detected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Our AR assistant uses advanced computer vision and machine learning to revolutionize how EV motor
                  maintenance is performed.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="rounded-full bg-blue-50 p-3">
                  <Eye className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Real-time AR Scanning</h3>
                <p className="text-sm text-gray-500 text-center">
                  Point your camera at any EV motor to instantly analyze its condition.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="rounded-full bg-blue-50 p-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Fault Recognition</h3>
                <p className="text-sm text-gray-500 text-center">
                  AI-powered detection of common EV motor issues with high accuracy.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="rounded-full bg-blue-50 p-3">
                  <Gauge className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Performance Analysis</h3>
                <p className="text-sm text-gray-500 text-center">
                  Track motor performance metrics and identify optimization opportunities.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-6 shadow-sm">
                <div className="rounded-full bg-blue-50 p-3">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Guided Repairs</h3>
                <p className="text-sm text-gray-500 text-center">
                  Step-by-step AR overlays show you exactly how to fix identified issues.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technology Stack</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                  Built with cutting-edge technologies to deliver accurate diagnostics and seamless AR experiences.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-50 p-3 mr-3">
                    <Cpu className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">AR Development</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  Unity3D with ARCore/ARKit integration for cross-platform AR experiences.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Real-time object tracking
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    3D overlay rendering
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Spatial mapping
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-50 p-3 mr-3">
                    <BrainCircuit className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">AI & ML</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  TensorFlow/PyTorch for fault detection and OpenCV for image recognition.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Computer vision algorithms
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Predictive maintenance models
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Real-time image processing
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-xl shadow-sm border">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-50 p-3 mr-3">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Backend & Data</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  Flask/FastAPI for real-time data streaming with Kafka/RabbitMQ for IoT integration.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Real-time data processing
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Secure API endpoints
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    Bluetooth connectivity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
