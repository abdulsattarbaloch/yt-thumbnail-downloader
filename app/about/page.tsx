import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download, Heart, Shield, Users, Zap } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - YouTube Thumbnail Downloader",
  description:
    "Learn about our mission to provide free, fast, and reliable YouTube thumbnail downloads for content creators and designers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <h1 className="text-4xl font-bold text-gray-900">
              About Our Service
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re passionate about making YouTube content more accessible.
            Our free thumbnail downloader helps creators, designers, and
            enthusiasts get the images they need, when they need them.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Heart className="h-6 w-6 text-red-500 mr-2" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe that access to digital content should be simple and
              free. Our YouTube Thumbnail Downloader was created to bridge the
              gap between content creators and the resources they need to
              succeed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you&apos;re a graphic designer looking for inspiration, a
              content creator analyzing competitors, or simply someone who found
              the perfect thumbnail image, our tool makes it easy to download
              high-quality YouTube thumbnails in just a few clicks.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                Lightning Fast
              </CardTitle>
              <CardDescription>
                Get thumbnails in seconds, not minutes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our optimized system processes your requests instantly,
                delivering high-quality thumbnails without any waiting time.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                100% Safe & Secure
              </CardTitle>
              <CardDescription>
                Your privacy and security are our priority
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We don&apos;t store your data or track your downloads.
                Everything happens client-side for maximum privacy and security.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="h-5 w-5 text-blue-500 mr-2" />
                Multiple Quality Options
              </CardTitle>
              <CardDescription>
                Choose the perfect resolution for your needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                From small previews to high-definition images, we provide
                thumbnails in various qualities to suit any project requirement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 text-purple-500 mr-2" />
                Trusted by Thousands
              </CardTitle>
              <CardDescription>
                Join our growing community of satisfied users
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Content creators, designers, and digital marketers worldwide
                trust our service for their thumbnail downloading needs.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Our Impact</CardTitle>
            <CardDescription className="text-center">
              Numbers that showcase our commitment to excellence
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-sm text-gray-600">
                  Thumbnails Downloaded
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  50K+
                </div>
                <div className="text-sm text-gray-600">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  99.9%
                </div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">0$</div>
                <div className="text-sm text-gray-600">Cost to Users</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Technology Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              Built with Modern Technology
            </CardTitle>
            <CardDescription>
              Powered by cutting-edge tools and frameworks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              Our application is built using the latest web technologies to
              ensure optimal performance, security, and user experience. We
              continuously update our tech stack to leverage the best tools
              available in the industry.
            </p>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Is this service really free?
              </h3>
              <p className="text-gray-600">
                Yes! Our YouTube Thumbnail Downloader is completely free to use.
                No hidden fees, no subscriptions, no catch.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Do I need to create an account?
              </h3>
              <p className="text-gray-600">
                No account required! Simply paste the YouTube URL and download
                your thumbnails instantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                What video platforms do you support?
              </h3>
              <p className="text-gray-600">
                Currently, we support YouTube videos. We&apos;re working on
                adding support for other platforms in the future.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">
                Can I use downloaded thumbnails commercially?
              </h3>
              <p className="text-gray-600">
                Please respect copyright laws and YouTube&apos;s terms of
                service. We recommend using thumbnails for educational,
                research, or fair use purposes only.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
