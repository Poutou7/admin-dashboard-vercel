<template>
  <div>
    Merchant
    <!-- Input Hide Details-->
    <v-col cols="12" sm="6">
      <UiChildCard title="Hide Details">
        <InputHideDetails />
      </UiChildCard>
    </v-col>
  </div>
</template>

<script setup>
import UiChildCard from '@/components/shared/UiChildCard.vue';
import InputHideDetails from '@/components/forms/form-elements/custominput/InputHideDetails.vue';
</script>

<style lang="scss" scoped></style>
