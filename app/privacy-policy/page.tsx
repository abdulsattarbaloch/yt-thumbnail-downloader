import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Lock, Database, Cookie, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy - YouTube Thumbnail Downloader",
  description:
    "Learn how we protect your privacy and handle your data when using our YouTube thumbnail download service.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <Shield className="h-12 w-12 text-green-500 mr-4" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we
            collect, use, and protect your information when you use our YouTube
            Thumbnail Downloader service.
          </p>
          <div className="flex justify-center mt-4">
            <Badge variant="outline" className="text-sm">
              Last updated: June 10, 2025
            </Badge>
          </div>
        </div>

        {/* Quick Overview */}
        <Card className="mb-8 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center text-green-800">
              <Eye className="h-5 w-5 mr-2" />
              Privacy at a Glance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <Lock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium">No Data Storage</p>
                <p className="text-gray-600">
                  We don&apos;t store your URLs or downloads
                </p>
              </div>
              <div className="text-center">
                <Database className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium">No User Accounts</p>
                <p className="text-gray-600">
                  No registration or personal info required
                </p>
              </div>
              <div className="text-center">
                <Cookie className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="font-medium">Minimal Cookies</p>
                <p className="text-gray-600">
                  Only essential cookies for functionality
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Information We Collect</CardTitle>
            <CardDescription>
              We collect minimal information to provide our service effectively
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Database className="h-5 w-5 text-blue-500 mr-2" />
                Information You Provide
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>YouTube URLs:</strong> Only temporarily processed to
                  extract thumbnails
                </li>
                <li>
                  • <strong>Contact Information:</strong> If you contact us via
                  our contact form
                </li>
                <li>
                  • <strong>Feedback:</strong> Any feedback or suggestions you
                  voluntarily provide
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Eye className="h-5 w-5 text-purple-500 mr-2" />
                Information Automatically Collected
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>Usage Analytics:</strong> Page views, time spent,
                  and feature usage (anonymized)
                </li>
                <li>
                  • <strong>Technical Data:</strong> Browser type, device
                  information, IP address
                </li>
                <li>
                  • <strong>Performance Data:</strong> Loading times and error
                  reports to improve service
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              How We Use Your Information
            </CardTitle>
            <CardDescription>
              We use collected information solely to provide and improve our
              service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-700">
                  Service Provision
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Process YouTube URLs to extract thumbnails</li>
                  <li>• Deliver downloaded images to your device</li>
                  <li>• Provide technical support when requested</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-700">
                  Service Improvement
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Analyze usage patterns to enhance user experience</li>
                  <li>• Monitor performance and fix technical issues</li>
                  <li>• Develop new features based on user needs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Protection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Lock className="h-6 w-6 text-red-500 mr-2" />
              Data Protection & Security
            </CardTitle>
            <CardDescription>
              We implement industry-standard security measures to protect your
              data
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Security Measures</h3>
              <ul className="space-y-2 text-gray-700">
                <li>
                  • <strong>HTTPS Encryption:</strong> All data transmission is
                  encrypted
                </li>
                <li>
                  • <strong>No Persistent Storage:</strong> URLs and images are
                  not stored on our servers
                </li>
                <li>
                  • <strong>Secure Infrastructure:</strong> Hosted on secure,
                  monitored servers
                </li>
                <li>
                  • <strong>Regular Updates:</strong> Security patches applied
                  promptly
                </li>
              </ul>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>Important:</strong> While we implement strong security
                measures, no method of transmission over the internet is 100%
                secure. We cannot guarantee absolute security.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <Cookie className="h-6 w-6 text-orange-500 mr-2" />
              Cookies and Tracking
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Types of Cookies We Use
              </h3>
              <div className="space-y-3">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-medium text-green-700">
                    Essential Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Required for basic website functionality
                  </p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-medium text-blue-700">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Help us understand how visitors use our site (anonymized)
                  </p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-medium text-purple-700">
                    Preference Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Remember your settings and preferences
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Managing Cookies</h3>
              <p className="text-gray-700">
                You can control cookies through your browser settings. However,
                disabling certain cookies may affect the functionality of our
                service.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Third-Party Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Third-Party Services</CardTitle>
            <CardDescription>
              We may use third-party services to enhance our functionality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Analytics Services
                </h3>
                <p className="text-gray-700 mb-2">
                  We use Google Analytics to understand how our service is used.
                  This helps us improve the user experience and fix issues.
                </p>
                <p className="text-sm text-gray-600">
                  Google Analytics data is anonymized and aggregated. You can
                  opt out using the Google Analytics Opt-out Browser Add-on.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">YouTube API</h3>
                <p className="text-gray-700">
                  Our service interacts with YouTube&apos;s API to extract
                  thumbnail information. This interaction is governed by
                  YouTube&apos;s Terms of Service and Google&apos;s Privacy
                  Policy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center">
              <UserCheck className="h-6 w-6 text-indigo-500 mr-2" />
              Your Rights and Choices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Data Rights</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Access to your personal data</li>
                  <li>• Correction of inaccurate data</li>
                  <li>• Deletion of your data</li>
                  <li>• Data portability</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Privacy Choices</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Opt out of analytics tracking</li>
                  <li>• Control cookie preferences</li>
                  <li>• Limit data collection</li>
                  <li>• Request data deletion</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Contact Us About Privacy</CardTitle>
            <CardDescription>
              Have questions about our privacy practices? We&apos;re here to
              help.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Email:</strong> thumbnaildownloader321@gmail.com
                  </li>
                  <li>
                    <strong>Response Time:</strong> We respond to privacy
                    inquiries within 48 hours
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates to Policy */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Updates to This Policy</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or applicable laws. We will notify you of
              any material changes by:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>• Posting the updated policy on this page</li>
              <li>• Updating the &apos;Last updated&apos; date at the top</li>
              <li>
                • Sending notifications for significant changes (if you&apos;ve
                provided contact information)
              </li>
            </ul>
            <p className="text-gray-700">
              We encourage you to review this Privacy Policy periodically to
              stay informed about how we&apos;re protecting your information.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
