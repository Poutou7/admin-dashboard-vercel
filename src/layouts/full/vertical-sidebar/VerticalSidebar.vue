<template>
  <!-- LeftSidebar Items -->
  <v-navigation-drawer
    v-model="customizer.Sidebar_drawer"
    elevation="0"
    rail-width="1"
    app
    top="0"
    class="leftSidebar"
    :rail="customizer.mini_sidebar"
    width="240"
  >
    <!---Logo part -->
    <div class="pa-4 pb-0">
      <Logo />
    </div>

    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <div class="px-4 py-8 sidebar-menus">
        <v-list class="py-1">
          <template v-for="item in sidebarMenu">
            <template v-for="sItem in item.children">
              <NavCollapse
                class="leftPadding"
                :item="sItem"
                :level="0"
                v-if="sItem.children"
              />
              <NavItem :item="sItem" class="leftPadding" v-else />
              </template>
          </template>
        </v-list>
      </div>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { shallowRef } from "vue";
import { useCustomizerStore } from "@/stores/customizer";
import sidebarItems from "./sidebarItem";
import NavItem from "./NavItem/index.vue";
import NavCollapse from "./NavCollapse/NavCollapse.vue";
import Logo from "../logo/Logo.vue";

const customizer = useCustomizerStore();
const sidebarMenu = shallowRef(sidebarItems);
</script>
