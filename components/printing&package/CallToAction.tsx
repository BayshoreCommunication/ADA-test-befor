import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Target } from "lucide-react";
import Link from "next/link";
const CallToAction = () => {
  return (
    <div>
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Print Project?
            </h2>
            <p className="text-3xl mb-8 text-teal-100">
              Join over 500,000 satisfied customers who trust us with their
              printing needs. Upload your design or choose from our professional
              templates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 text-4xl font-semibold flex items-center justify-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Order
                <ArrowRight className="w-10 h-10 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
