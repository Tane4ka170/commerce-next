import React from "react";

import { SignInButton, SignUpButton } from "@clerk/nextjs";

import Logo from "./Logo";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const NoAccess = ({
  details = "Sign in to access your cart and complete your purchase. Your favorite items are waiting!",
}: {
  details?: string;
}) => {
  return (
    <div className="flex items-center justify-center py-12 md:py-32 bg-gray-400 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex items-center flex-col gap-1">
          <Logo />
          <CardTitle className="text-2xl text-center font-bold">
            Glad to see you again!
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center font-medium text-darkColor/35">{details}</p>
          <SignInButton mode="modal">
            <Button className="w-full" size={"lg"}>
              Sing In
            </Button>
          </SignInButton>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground text-center">
            New here?
          </div>
          <SignUpButton mode="modal">
            <Button variant="outline" className="w-full" size="lg">
              Sign up now
            </Button>
          </SignUpButton>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NoAccess;
