export const SubgroupConstants = {
  minSize: 4,
  maxSize: 7,
  noSubgroupIdPlaceholder: 0,
} as const;

export const InitializationStateConstants = {
  minCommunitySizeToExit: 12,
  minSubgroupCountToExit: 3,
};

export const ExpectedSuccessorCounts = {
  communitySmallerThan35: 2,
  communityLargerThan35: 6,
  getExpectedSuccessorCount: (communitySize: number) => communitySize >= 35 ? 6 : 2,
}