"use client";

import { MY_ORDERS_QUERYResult } from "@/sanity.types";
import { TableBody, TableCell, TableRow } from "./ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import PriceFormatter from "./PriceFormatter";
import { format } from "date-fns";
import { X } from "lucide-react";
import { useState } from "react";
import OrderDetailDialog from "./OrderDetailDialog";
import toast from "react-hot-toast";

const OrdersComponent = ({ orders }: { orders: MY_ORDERS_QUERYResult }) => {
  const [selectedOrder, setSelectedOrder] = useState<
    MY_ORDERS_QUERYResult[number] | null
  >(null);

  const handleDelete = () => {
    toast.error("Only admins can delete orders.");
  };

  return (
    <>
      <TableBody>
        <TooltipProvider>
          {orders.map((order) => (
            <Tooltip key={order.orderNumber}>
              <TooltipTrigger asChild>
                <TableRow
                  className="cursor-pointer hover:bg-muted/40 transition-all h-14"
                  onClick={() => setSelectedOrder(order)}
                >
                  <TableCell className="font-semibold text-sm text-gray-950">
                    #{order.orderNumber?.slice(-6) ?? "N/A"}
                  </TableCell>
                  <TableCell className="hidden md:table-cell text-xs text-muted-foreground">
                    {order?.orderDate &&
                      format(new Date(order.orderDate), "dd MMM yyyy")}
                  </TableCell>
                  <TableCell className="text-sm">
                    {order.customerName}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-xs">
                    {order.email}
                  </TableCell>
                  <TableCell>
                    <PriceFormatter
                      amount={order.totalPrice}
                      className="text-sm font-medium text-black"
                    />
                  </TableCell>
                  <TableCell>
                    {order?.status && (
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[11px] tracking-wide font-semibold ${
                          order.status === "paid"
                            ? "bg-emerald-400 text-emerald-100"
                            : "bg-orange-600 text-orange-200"
                        }`}
                      >
                        {order.status.toUpperCase()}
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell text-xs text-gray-600 truncate max-w-[120px]">
                    {order?.invoice?.number ?? "---"}
                  </TableCell>
                  <TableCell
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete();
                    }}
                    className="text-center group"
                  >
                    <X
                      size={18}
                      className="mx-auto group-hover:text-destructive transition"
                    />
                  </TableCell>
                </TableRow>
              </TooltipTrigger>
              <TooltipContent side="top">
                View full order details
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </TableBody>
      <OrderDetailDialog
        order={selectedOrder}
        isOpen={!!selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </>
  );
};

export default OrdersComponent;
