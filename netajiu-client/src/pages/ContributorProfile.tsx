import ContributorBasicInfo from "../appcomponents/ContributorBasicInfo";
import ContributorProfileStats from "../appcomponents/ContributorProfleStats";
import ContributorContributions from "../appcomponents/ContributorContributions";
import "./ContributorProfile.css";

export default function ContributorProfile() {
  return (
    <div className="contributor_profile">
      <ContributorBasicInfo />
      <ContributorProfileStats />
      <ContributorContributions />
    </div>
  );
}
