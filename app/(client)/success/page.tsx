"use client";

import useStore from "@/store";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Truck, ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";

const SuccessPageContent = () => {
  const { resetCart } = useStore();
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");

  useEffect(() => {
    if (orderNumber) {
      resetCart();
    }
  }, [orderNumber, resetCart]);

  return (
    <div className="py-10 px-6 bg-gradient-to-tr from-white to-gray-500 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-3xl shadow-xl w-full max-w-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.1,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="w-24 h-24 bg-green-300 rounded-full flex items-center justify-center mx-auto shadow-md mb-6"
        >
          <CheckCircle className="text-white w-12 h-12" />
        </motion.div>

        <h2 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h2>
        <p className="text-gray-600 text-lg mb-2">
          Your order has been placed and is being processed.
        </p>
        <p className="text-gray-500 mb-6">
          Confirmation has been sent to your email.
        </p>

        {orderNumber && (
          <p className="text-sm text-gray-200 mb-8">
            <span className="font-medium">Order #</span>{" "}
            <span className="font-mono">{orderNumber}</span>
          </p>
        )}

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="flex items-center justify-center px-5 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-400 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <Link
            href="/orders"
            className="flex items-center justify-center px-5 py-3 bg-white border border-gray-100 text-gray-200 rounded-lg hover:bg-gray-800 transition"
          >
            <Truck className="w-5 h-5 mr-2" />
            Track Orders
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center px-5 py-3 bg-green-200 text-white rounded-lg hover:bg-green-700 transition"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

const SuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
};

export default SuccessPage;
