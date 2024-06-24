<script setup>
import { ref } from "vue";
// common components
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";

/*import tabler icons*/
import {
  UserCircleIcon,
  BellIcon,
} from "vue-tabler-icons";

//components
import AccountTab from "@/components/pages/account-settings/AccountTab.vue";
import NotificationTab from "@/components/pages/account-settings/NotificationTab.vue";

/*tab*/
const tab = ref(null);

// template breadcrumb
const page = ref({ title: "AccountSetting" });
const breadcrumbs = ref([
  {
    text: "Dashboard",
    disabled: false,
    href: "#",
  },
  {
    text: "AccountSetting",
    disabled: false,
    href: "#",
  },
]);
</script>

<template>
  <BaseBreadcrumb
    :title="page.title"
    :breadcrumbs="breadcrumbs"
  ></BaseBreadcrumb>
  <v-row class="justify-center">
    <!--Account Settings tabs-->
    <v-col cols="12" md="12">
      <v-card elevation="10" class=" " rounded="md">
        <v-tabs
          v-model="tab"
          bg-color="transparent"
          height="70"
          color="primary"
        >
          <v-tab value="Account" class="text-medium-emphasis"
            ><UserCircleIcon class="mr-2" size="20" />
            {{ $t("Account") }}</v-tab
          >
          <v-tab value="Notification" class="text-medium-emphasis"
            ><BellIcon class="mr-2" size="20" />{{ $t("Notification") }}</v-tab
          >
        </v-tabs>
        <v-divider></v-divider>
        <v-card-text class="pa-sm-6 pa-1 pb-sm-6 pb-3">
          <v-window v-model="tab">
            <v-window-item value="Account">
              <AccountTab />
            </v-window-item>
            <v-window-item value="Notification">
              <NotificationTab />
            </v-window-item>
          </v-window>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
