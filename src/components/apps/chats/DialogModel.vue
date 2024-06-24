<template>
  <v-dialog class="dialog-mw" :class="{ cairo: $i18n.locale == 'ro' }">
    <v-card max-width="490" class="mx-auto pa-md-5 pt-4 pb-4">
      <v-card-title class="text-center align-item-center">
        <slot />
        <span class="d-block title">{{ $t(title) }}</span>
      </v-card-title>

      <v-card-text class="text-center siz text-capitalize">
        {{ $t(text) }}
      </v-card-text>
      <v-card-actions>
        <v-btn @click="$emit('cancel')">{{ $t("Cancel") }}</v-btn>
        <v-btn @click="yes">{{ $t("Yes") }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
const props = defineProps(["dialog", "title", "text"]);
const emit = defineEmits(["cancel"]);

function yes() {
  console.log("Yes");
  emit("cancel");
}
</script>

<style scoped>
.v-card-actions {
  margin: 0 50px;
  gap: 30px;
}
.v-card-actions > button {
  flex: 1;
  background-color: rgb(var(--v-theme-primary));
  color: #fff;
}
.v-card-actions > button:first-child {
  background-color: #959595;
}

@media (max-width: 575px) {
  .v-card-actions {
    margin: 0 30px;
    gap: 15px;
  }
  .title {
    font-size: 16px;
  }
}
</style>
