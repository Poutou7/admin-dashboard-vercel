<script setup lang="ts">
import { ref } from "vue";

/*change password*/
const currenypwd = ref("");
const showcurrenypwd = ref(false);
const newpwd = ref("");
const shownewpwd = ref(false);
const confirmpwd = ref("");
const showconfirmpwd = ref(false);

/*personal detail*/
const namemodel = ref("Ahmed Zaki");
const storemail = ref("");
const mobileNumber = ref("");
</script>

<template>
  <v-card elevation="10">
    <v-row class="ma-sm-n2 ma-n1">
      <v-col cols="12" sm="6">
        <v-card variant="outlined">
          <v-card-item>
            <h5 class="text-h5">{{ $t("ChangeProfile") }}</h5>
            <div class="text-subtitle-1 textSecondary mt-2">
              {{ $t("ChangeYourProfilePictureFromHere") }}
            </div>
            <div class="text-center mt-6 mb-6">
              <v-avatar size="120" class="avatar">
                <img
                  src="@/assets/images/profile/user-3.jpg"
                  height="120"
                  alt="image"
                  class="img"
                />
              </v-avatar>
            </div>
            <div class="d-flex justify-center">
              <v-btn color="primary" class="mx-2 text-uppercase" flat>{{
                $t("Upload")
              }}</v-btn>
              <v-btn
                color="error"
                class="mx-2 text-uppercase"
                variant="outlined"
                flat
                >{{ $t("Reset") }}</v-btn
              >
            </div>
            <div class="text-subtitle-1 textSecondary text-center my-sm-8 my-6">
              {{ $t("AllowedJPGGIFPNGMaxsizeof800K") }}
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card variant="outlined">
          <v-card-item>
            <h5 class="text-h5">{{ $t("ChangePassword") }}</h5>
            <div class="text-subtitle-1 textSecondary mt-2">
              {{ $t("ToChangeYourPasswordPleaseConfirmHere") }}
            </div>
            <div class="mt-5">
              <v-label class="mb-2 font-weight-medium">{{
                $t("CurrentPassword")
              }}</v-label>
              <v-text-field
                color="primary"
                variant="outlined"
                :type="showcurrenypwd ? 'text' : 'password'"
                v-model="currenypwd"
                :append-inner-icon="showcurrenypwd ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showcurrenypwd = !showcurrenypwd"
              />
              <v-label class="mb-2 font-weight-medium">{{
                $t("NewPassword")
              }}</v-label>
              <v-text-field
                color="primary"
                variant="outlined"
                :type="shownewpwd ? 'text' : 'password'"
                v-model="newpwd"
                :append-inner-icon="shownewpwd ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="shownewpwd = !shownewpwd"
              />
              <v-label class="mb-2 font-weight-medium">{{
                $t("ConfirmPassword")
              }}</v-label>
              <v-text-field
                color="primary"
                variant="outlined"
                :type="showconfirmpwd ? 'text' : 'password'"
                v-model="confirmpwd"
                hide-details
                :append-inner-icon="showconfirmpwd ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append-inner="showconfirmpwd = !showconfirmpwd"
              />
            </div>
          </v-card-item>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card variant="outlined">
          <v-card-item>
            <h5 class="text-h5">{{ $t("PersonalDetails") }}</h5>
            <div class="text-subtitle-1 textSecondary mt-2">
              {{ $t("ToChangeYourPersonalDetailEditSaveFromHere") }}
            </div>
            <div class="mt-5">
              <v-row>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">{{
                    $t("YourName")
                  }}</v-label>
                  <v-text-field
                    color="primary"
                    variant="outlined"
                    type="text"
                    v-model="namemodel"
                    hide-details
                    dir="auto"
                  />
                </v-col>
                <v-col cols="12" md="6">
                  <v-label class="mb-2 font-weight-medium">{{
                    $t("MobileNumber")
                  }}</v-label>
                  <v-text-field
                    color="primary"
                    variant="outlined"
                    type="text"
                    v-model="mobileNumber"
                    placeholder="+966 331 766 152"
                    hide-details
                    dir="auto"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-label class="mb-2 font-weight-medium">{{
                    $t("Email")
                  }}</v-label>
                  <v-text-field
                    color="primary"
                    variant="outlined"
                    type="email"
                    v-model="storemail"
                    placeholder="xxx@mail.com"
                    hide-details
                    dir="auto"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
    <div class="d-flex justify-end mt-5">
      <v-btn color="primary" class="mr-4" flat>{{ $t("Save") }}</v-btn>
      <v-btn class="bg-lighterror text-error" flat>{{ $t("Cancel") }}</v-btn>
    </div>
  </v-card>
</template>
