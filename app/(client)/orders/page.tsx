import Container from "@/components/Container";
import OrdersComponent from "@/components/OrdersComponent";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getMyOrders } from "@/sanity/queries";
import { auth } from "@clerk/nextjs/server";
import { FileX } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const OrdersPage = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const orders = await getMyOrders(userId);

  return (
    <Container className="py-12">
      {orders?.length > 0 ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-400">
              Your Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-32">Order #</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Email
                    </TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Invoice
                    </TableHead>
                    <TableHead className="text-center">View</TableHead>
                  </TableRow>
                </TableHeader>
                <OrdersComponent orders={orders} />
              </Table>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <FileX className="w-20 h-20 text-muted mb-4" />
          <h2 className="text-2xl font-semibold">
            You haven&apos;t ordered anything yet
          </h2>
          <p className="text-sm text-gray-800 max-w-md mt-2">
            Once you start shopping, your orders will appear here. Ready to
            discover something new?
          </p>
          <Button asChild className="mt-6">
            <Link href="/">Start Shopping</Link>
          </Button>
        </div>
      )}
    </Container>
  );
};

export default OrdersPage;
