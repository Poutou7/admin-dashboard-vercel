<template>
  <v-row>
    <!-- Profit card -->
    <v-col cols="12" lg="6">
      <ProfitCard />
    </v-col>
    <v-col cols="12" lg="6">
      <v-row>
        <!-- Subscription -->
        <v-col cols="12" md="6">
          <SubscriptionCard />
        </v-col>
        <!-- Users -->
        <v-col cols="12" md="6">
          <UsersChart />
        </v-col>
      </v-row>
    </v-col>
    <!-- Revenue Forecast -->
    <v-col cols="12" lg="8">
      <RevenueCard />
    </v-col>
    <!-- Annual Profit -->
    <v-col cols="12" lg="4">
      <AnnualProfit />
    </v-col>
    <!-- Weekly Schedule -->
    <v-col cols="12" lg="12">
      <WeeklySchedule />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import ProfitCard from "@/components/dashboard/ProfitCard.vue";
import SubscriptionCard from "@/components/dashboard/SubscriptionCard.vue";
import UsersChart from "@/components/dashboard/UsersChart.vue";
import RevenueCard from "@/components/dashboard/RevenueCard.vue";
import AnnualProfit from "@/components/dashboard/AnnualProfit.vue";
import WeeklySchedule from "@/components/dashboard/WeeklySchedule.vue";
</script>
