import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import PriceFormatter from "./PriceFormatter";

interface OrderDetailsDialogProps {
  order: MY_ORDERS_QUERYResult[number] | null;
  isOpen: boolean;
  onClose: () => void;
}

const OrderDetailDialog: React.FC<OrderDetailsDialogProps> = ({
  order,
  isOpen,
  onClose,
}) => {
  if (!order) return null;

  const formatDate = (dateString: string) =>
    new Intl.DateTimeFormat("en-GB").format(new Date(dateString));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-4xl max-h-[90vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-darkColor">
            Order #{order.orderNumber?.slice(-8) ?? "N/A"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
          <Info label="Customer" value={order.customerName} />
          <Info label="Email" value={order.email} />
          <Info
            label="Order Date"
            value={order.orderDate ? formatDate(order.orderDate) : "N/A"}
          />
          <Info
            label="Status"
            value={
              <span
                className={`capitalize font-semibold ${
                  order.status === "paid" ? "text-green-600" : "text-yellow-600"
                }`}
              >
                {order.status}
              </span>
            }
          />
          <Info label="Invoice" value={order.invoice?.number ?? "No invoice"} />
        </div>

        {order.invoice?.hosted_invoice_url && (
          <div className="mt-2">
            <Button variant="outline" asChild>
              <Link href={order.invoice.hosted_invoice_url} target="_blank">
                View Invoice
              </Link>
            </Button>
          </div>
        )}

        <h4 className="mt-6 font-semibold text-darkColor">Products</h4>
        <Table className="mt-2">
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Qty</TableHead>
              <TableHead>Unit Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.products?.map((product, idx) => (
              <TableRow key={idx}>
                <TableCell className="flex gap-2 items-center">
                  {product?.product?.images?.[0] && (
                    <Image
                      src={urlFor(product.product.images[0]).url()}
                      alt="Product"
                      width={40}
                      height={40}
                      className="rounded border"
                    />
                  )}
                  {product?.product?.name ?? "Unnamed product"}
                </TableCell>
                <TableCell>{product?.quantity}</TableCell>
                <TableCell>
                  <PriceFormatter
                    amount={product?.product?.price}
                    className="text-black"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="mt-6 flex justify-end">
          <div className="w-60 text-sm space-y-2">
            {order.amountDiscount > 0 && (
              <>
                <Row label="Subtotal">
                  <PriceFormatter
                    amount={
                      (order.totalPrice ?? 0) + (order.amountDiscount ?? 0)
                    }
                    className="font-medium"
                  />
                </Row>
                <Row label="Discount">
                  <PriceFormatter
                    amount={order.amountDiscount}
                    className="text-red-950 font-medium"
                  />
                </Row>
              </>
            )}
            <Row label="Total">
              <PriceFormatter
                amount={order.totalPrice}
                className="text-black font-bold"
              />
            </Row>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Info = ({ label, value }: { label: string; value: React.ReactNode }) => (
  <p className="text-darkColor/95">
    <span className="font-semibold">{label}:</span> {value}
  </p>
);

const Row = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="flex justify-between">
    <span>{label}</span>
    {children}
  </div>
);

export default OrderDetailDialog;
