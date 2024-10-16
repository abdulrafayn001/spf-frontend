import { UserProfile } from "@/types/user";

export function calculateProfileCompletion(profile: UserProfile): number {
  const totalFields = 8;
  let completedFields = 0;

  if (profile.firstName) completedFields++;
  if (profile.lastName) completedFields++;
  if (profile.dateOfBirth) completedFields++;
  if (profile.occupation) completedFields++;

  if (profile.financialProfile) {
    if (profile.financialProfile.preferredCurrency) completedFields++;
    if (profile.financialProfile.monthlyIncome) completedFields++;
    if (profile.financialProfile.financialGoals) completedFields++;
    if (profile.financialProfile.riskTolerance) completedFields++;
  }

  const completionPercentage = (completedFields / totalFields) * 100;

  return Math.round(completionPercentage);
}
