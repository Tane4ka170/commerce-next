"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { XCircle, ArrowLeft, ShoppingBag } from "lucide-react";
import Link from "next/link";

const CancelPageContent = () => {
  return (
    <div className="py-10 px-6 bg-gradient-to-br from-gray-300 to-white min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-xl w-full max-w-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 250,
            damping: 20,
          }}
          className="w-24 h-24 bg-red-400 rounded-full flex items-center justify-center mx-auto shadow-md mb-6"
        >
          <XCircle className="text-white w-12 h-12" />
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-50 mb-4">
          Payment Canceled
        </h2>
        <p className="text-gray-300 text-lg mb-2">
          Your checkout was canceled before completion.
        </p>
        <p className="text-gray-300 mb-8">
          If this was a mistake, you can return to your cart and try again.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center px-5 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/cart"
            className="flex items-center justify-center px-5 py-3 bg-red-100 text-white rounded-lg hover:bg-red-900 transition"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Return to Cart
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const CancelPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CancelPageContent />
    </Suspense>
  );
};

export default CancelPage;
