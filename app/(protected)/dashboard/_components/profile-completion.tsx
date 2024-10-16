"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@/hooks/useUser";
import { calculateProfileCompletion } from "@/lib/utils/profileCompletionCalculator";
import { useSuspenseQuery } from "@tanstack/react-query";
import React, { useMemo } from "react";

const ProfileCompletion = () => {
  const { getUserInfo } = useUser();
  const { data } = useSuspenseQuery(getUserInfo);

  const completionPercentage = useMemo(() => {
    return calculateProfileCompletion(data);
  }, [data]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Completion</CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={completionPercentage} className="w-full" />
        <p className="mt-2 text-sm text-muted-foreground">
          {completionPercentage}% Complete
        </p>
      </CardContent>
    </Card>
  );
};

export default React.memo(ProfileCompletion);

