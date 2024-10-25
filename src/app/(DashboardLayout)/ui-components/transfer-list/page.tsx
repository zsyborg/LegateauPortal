import { Grid } from "@mui/material";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/app/components/container/PageContainer";
import ParentCard from "@/app/components/shared/ParentCard";
import ChildCard from "@/app/components/shared/ChildCard";
import BasicTransferList from "@/app/components/ui-components/transfer-list/BasicTransferList";
import EnhancedTransferList from "@/app/components/ui-components/transfer-list/EnhancedTransferList";

import BasicTransferListCode from "@/app/components/ui-components/transfer-list/code/BasicTransferListCode";
import EnhancedTransferListCode from "@/app/components/ui-components/transfer-list/code/EnhancedTransferListCode";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Transfer List",
  },
];

const MuiTransferList = () => (
  <PageContainer title="Transfer List" description="this is Transfer List">
    {/* breadcrumb */}
    <Breadcrumb title="Transfer List" items={BCrumb} />
    {/* end breadcrumb */}

    <ParentCard title="Transfer List">
      <Grid container spacing={3}>
        <Grid item xs={12} display="flex" alignItems="stretch">
          <ChildCard title="Basic" codeModel={<BasicTransferListCode />}>
            <BasicTransferList />
          </ChildCard>
        </Grid>
        <Grid item xs={12} display="flex" alignItems="stretch">
          <ChildCard title="Enhanced" codeModel={<EnhancedTransferListCode />}>
            <EnhancedTransferList />
          </ChildCard>
        </Grid>
      </Grid>
    </ParentCard>
  </PageContainer>
);
export default MuiTransferList;
