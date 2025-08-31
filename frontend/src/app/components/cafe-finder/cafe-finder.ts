import { Component } from '@angular/core';
import { CafeService } from '../../services/cafe';
import { CommonModule } from '@angular/common';
import { CafeList } from '../cafe-list/cafe-list';

@Component({
  selector: 'app-cafe-finder',
  standalone: true,
  imports: [CommonModule, CafeList],
  templateUrl: './cafe-finder.html',
  styleUrls: ['./cafe-finder.css'],
  providers: [CafeService],
})
export class CafeFinderComponent {
  cafes: any[] = [];
  loading = false;

  constructor(private cafeService: CafeService) {}

  findCafes() {
    this.loading = true;

    const lat = 12.9716;
    const lng = 77.5946;

    this.cafes = [
      {
        id: 'ChIJI_uzjBcXrjsRYJ-spWNxLYA',
        formattedAddress:
          '9/3, Museum Rd, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001',
        location: {
          latitude: 12.9737371,
          longitude: 77.6032546,
        },
        rating: 4.4,
        userRatingCount: 5984,
        iconMaskBaseUri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/cafe_pinlet',
        displayName: {
          text: 'Amintiri - Cafe | Patisserie | Gifting',
          languageCode: 'en',
        },
        photos: [
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpfJ_y2Drbxh5tWm3apuLr9XNLqI7Dw8GVA--8tNHfUFlBGJrdszKuGoCvKd8Ck3W8CTd7upWzS1HcFNKtzogwDhgV5jUgca2OaziAcTAFaqOpeB8jIFUz0d3sA3MOyDiDZozjaln7MiejroARDviXJlxSqB74GM7xauOzaDZY2DsGXGwFe4rIAklOA_h0pM-KnD1SSY5Gp7oVVm07xaHBoVV1LHIficKaOVxQPBCnmS1hec9tZlImPldCBSMmaQlP_3zJLebPaksqmkzGyz-qfoFnvtS_kPCiEo4VLTnC5Fya90knxX-NgCcyouRKkBsfoOg-apxfjmtTrA1v15IUKj2456sJ3gB31ji8op9aU2mx7oQpLZZHuF2Ej2Gjz2TtCECR1NJRSyH_zBIkHqjLfjV0c-_X9rBKHA-PHrg2-byA',
            widthPx: 2592,
            heightPx: 4608,
            authorAttributions: [
              {
                displayName: 'Roshan Nachappa',
                uri: 'https://maps.google.com/maps/contrib/100815686371519680535',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjUSMnbejez7_1-zwSBWwlkKaoizLQTybdpykfDvi6LrQA8YS-2I0A=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICugNC4Eg&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICugNC4Eg!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpeUQ_pQqWVbB5AJJPA4X6Vfswpj5GTz1mgMR-dEosP4Ct3nAbj2o8LA3QjkkXAXDUIxWEdGZSMDYPGpeR9UwDqdbYPHfox9t_IFhbEY5CUZM5zMEO3M1yrVigualNKSmvrMdwyEb8T6xMBYWHAMr4B_prfDQpg186NxfzBQQFsFrZelHAa1Ee41fQFw2goidV5u4_ozM3KOEsbyywqiNlxJdIT8YrCXBiOVF_twEImCNaKPo-rQgXMrYsQXWocnT3qrbDrPlb0EBS2w092Z5oFGfXnxbFC2qsQWQiTkfx8O-w',
            widthPx: 3600,
            heightPx: 4500,
            authorAttributions: [
              {
                displayName: 'Amintiri',
                uri: 'https://maps.google.com/maps/contrib/102750079795749375980',
                photoUri:
                  'https://lh3.googleusercontent.com/a/ACg8ocJiMftgIl63n65otqgpU30VwTxqIH1HZhDmOH_tssCcjWk7NLU=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipP0tpQivIhi3y6gmoUFMtn66_qdbDtQkv7_t2XJ&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipP0tpQivIhi3y6gmoUFMtn66_qdbDtQkv7_t2XJ!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpdMMqNPBmFlLU-X6BQhvtAK37ugA7Fe3gBEjkfcsrw7JKAkiHtz91srKe3K5QwPgsW1O16BXQG_Wh6rq4qd4CPli9YYcW8Mwz7Ryf7PFRi4pRyhqeegNGBWF0hVsWVBiTXUBPVslyJppYxPMuUPd6Va1dGrnn8hIPCbFcZnW8OUtWg2OMwvucOnzlCwQI4998XAjuHhM47DqCpWWFyt4cqBzZxwbZm0Ysm0sOkNOliZ5C01ML8rCkN6TuWTX0o_JJBkd1w2RE22SOLaGNGvMNX9Fx79diZuX2MDBb1tbxwZIlpDCO8gsD7deEKAPwDSpTSD5TRiQfMB-ho03nx0WrHhjJcXPNoX8Z75vEb3tJhx_xrANSO05rGXnFBpqBJYjyN9e8_37TN1OcNSbThwzP1V058EhNVWdwJ3i2objHOOkXorXQr9MFVmYHYlwkf-',
            widthPx: 4032,
            heightPx: 3024,
            authorAttributions: [
              {
                displayName: 'Rojmira Khatun',
                uri: 'https://maps.google.com/maps/contrib/112997002390346638634',
                photoUri:
                  'https://lh3.googleusercontent.com/a/ACg8ocIcdnchoHeebm5VBg8ABBoPzlR5xeqQaKf9z1UeAdYH6DMbH85r=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhC37W0mbDwVaLSyNoifud_2&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhC37W0mbDwVaLSyNoifud_2!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpfkRb9miHeaRSwUAExziBu-eTpW4v7pQYKm3LUvreC_dLCQPtgjl5olH_vRWY0LGKHXNuRMsmLf3n6ODocaglSJYEzRzcbLB0mt3D7A7K-0qFXuLYq9OfrhZVQMlsUlgTbWFAALYiEO1mGBqfR1bqBE_m0fKk50QIZ7SJyy93sttONPHguSmx3TuNOLnhUukP720iHrq99nFOj2wjA8pisoUQaXdsbUpsevJIJSuCp0mLrIU_5w2-KIIHRKZywIDc4TEn2-jSoH_-PkLagG58N558__ttcKQZea24PXRUsjdtuvxb6wP9uec84qoYO4vDjHtwm4QpfZ7Dldl8GOvxu13Pqu7ScmClEz7tY7FK0bDV3uocY_hAuFsQve-IBmkMieqaach8cMwmS1gLhH9iDu_vEakWhtdU7kuM7pVBWyKySa',
            widthPx: 1848,
            heightPx: 1994,
            authorAttributions: [
              {
                displayName: 'sid kapoor',
                uri: 'https://maps.google.com/maps/contrib/105012900317297859903',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjXtcgjykPdMQO1uob60DtLvLHHaiva7aAw-adpufBeQPmgZWt9-=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICfzJKl-gE&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICfzJKl-gE!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpeLIiJMJybrgwWJICgxrsBlo7yV8LiDeNJ1t6NYPKnp1VuzYSnPn-Wm8dL8cwIcGu3LL0HMbhdZVohgXQhsGFGt-XYlDknvWiqblJz_LEjd8dFCRKWrGRHR98AyqVm-B2rcnYtN0zA0CZZqzpYeyY7mtpEaxDJgbKavIHrxqlueio3yiXlCMqPBaY2if_PU-d-C-7dKDEwkmRI6AW6Zbn8FsGutgMtStpHENlaKHfCvfq4DGd_-BHVkY9NPK-Px8Ph0Jfpb1C3WimNt23g4K7RfF-gI_pEWGFqtCTzWWf2Of1Jmke3giSKwaHqWM4uBTX8g5Xz_WjPoyoU2THZHPpfAvvPIv0ikY9OVKyePiSHKReSULrQo0PvUw2RHdHgzU1vpc7NLR2OKNOJ7zn1sl1emWqTRbOpWa3_-qZnPLCT_8BIv',
            widthPx: 2506,
            heightPx: 2753,
            authorAttributions: [
              {
                displayName: 'Haren Vithaldas',
                uri: 'https://maps.google.com/maps/contrib/116270833799602444295',
                photoUri:
                  'https://lh3.googleusercontent.com/a/ACg8ocIs-MKl9rIE6oMAPrprMYFeiG2GpAjuQ0xcZqMGsC3DcbNFZg=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgMDooNHOkgE&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgMDooNHOkgE!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpfx1p2S6OwbeRQxh4JlrcdNd2ID7zWkYaSkkkCukr3XEQJSM9mYHkN7Bz3OGlX9FxdbRV_dtM_4SeNiUl9ibuX_7uVFDKEm8_QZCRrjgUyauJElygMIPwC3smkcI23lyP-7FM_5r4o9mERTwsMn7tkx5QvoGYkENJKspT51GURzFwYZdG0muTn_nYMLqKk62o_16jV2tK-AqC8BG5BprXVlN9bygO64H5kABxG7LoJhvDd3DHxMcK921-0hzjcHqtpYEC54iRbi1ixuOePqjdL29Iq1B62Pjslj0B6sEshJPUfGZbsHZ8HeVMOGGX4SSenVSE_zPE4KHNNqr34EQJ3qSWe3h0dQ3au2WeAqxhQkqyQmkSSKe4PJq5ZQefkEfVU3jYcGx6LSHLMIiHhG5LHdxoRibW4BCkxqqFbVJ9p_yw',
            widthPx: 3024,
            heightPx: 4032,
            authorAttributions: [
              {
                displayName: 'Sahil Pandita',
                uri: 'https://maps.google.com/maps/contrib/105170229353440642761',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjWmhh5bGg2IWoRU-CjdcXVgcIVAE4a7GT7cGTdLMkbtBY_Fg0CCAQ=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICv9JuJMA&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICv9JuJMA!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpe55mKWmsL1y5Z2oHIS4iZqXI2F-K1FZxJOq77K5XSMSApgNLNloS8YbvrtfehLTVJuxjlMKa7t45QWNycUX4LqUCHezvhEjij0fqvtARVMXt-YPxnsdiGJpTptr2vdNhc2NNcs7uXcxm90yEVpnnzksUYzyT1Sa6IUk1gNzBODfhgNJOqpZSHPPwd2V0Z1MWlAR3SOR8KpCIDnsH-ZzOAJmn8K7pnCzGrMpLV2hDkwviHinCWAMmtb515afH8xmN-tmlXZxAmY0wfYEZ6bE5Qb0--oMbTwaaZdI0Adx6Mt3VakuBCGCdMBPufi6UnA8-JZdQgCDKJClgMCtIVMW7DVGJ6stKTiDXEalO3Uc2xiPEjvwql36AL7x-zYgSqOZNoTOAHNxbujAupIGFbmUvy3YqOKwKNcSI3NckqRoE3mvQ',
            widthPx: 4800,
            heightPx: 3600,
            authorAttributions: [
              {
                displayName: 'Joseph Wilson',
                uri: 'https://maps.google.com/maps/contrib/116360574331861589179',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjXUYw9J2zcOWrtsE1iCNe_pSPUnr22dOBzaSrMK6u91KZX11A5Q=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgMDI4dvlVA&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgMDI4dvlVA!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpf5-t3diylGSH9o1jvWFglx7pv2LhmgjNd6rKp8eeQp_u0oSxDs8zm8toH4lzGVrcxqRsu7y2pHJvs-7bAEwb7cEqvdCcraYczCSiyCX4EL8cPPXMol31Ny_w05WAayijhV2OVQ9QB1UJJt2BunLRuSBnP-QnHo8PCX-0bDmmTVSWuMf0L_5i5_fafALoRUFLacrScZXahM0KjPa6Rl-F7nAe1AfACUi-DIzU59A05hbvHwq9YHQfFOSwNGuMoanC-OwIKBgJIPybkHMMcpyniAn7EITf6yA0UdzJf3ebuK_Uf_uiQztjAMRRnq2LdK9Ov90Gz1dszDqUFUMwPQco_Wl2CtO1LxR593w4pFQiz7qB0tnBAIPfOP4IjlyPePVaa7qJzogyeNj1aQKKgtlkdPSYyfokvURIKyI3P_nqY',
            widthPx: 3000,
            heightPx: 4000,
            authorAttributions: [
              {
                displayName: 'Vinutha Raj',
                uri: 'https://maps.google.com/maps/contrib/104099098353133809493',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjVUSLhj8MXQ17JBNLX3cWmTsEmK8arpxLT8TRWNk_vaVQgVOX8Q1A=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDnyN3UNg&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDnyN3UNg!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpcx6K2ovdgGXDUNOgybAG_Od4po43rticaXnVCEZyb4MMcoPfTHlD-ObLCAkR7FeaIwTPY643XF6IsWdns34sR8Z98t0ZQe7dCymqb7vv2xoeka0WwQZ_3hYcVxUslDFMFTp_DxJDvCL52L2lELo_CaW_VJWhe5ZijT_b5UBvJ4QBLQ5CRZr4Su2ujf0nVnR3yXN7MxssK3J2K2y0uXbewddqTeXj-Iq_RfELH9hqXdO6OVheu5WJDrUwIdi124-GsVb4m7tBsSJoDMaDRBE-et2KGnQ5NayYBpupzMrXu2NfzfBV4lpIR7rfztv75igGpu7b4dh7P5PwcDIm416jNvMVkka-qLzKTlNfY-lECPOrUTcGVYy38ZvrPtdhYirVq51nbf8Nox04_IIVi3_Tolg3anvXIUCeYYj-3ZqSX1ORXiTbdMGvuM5mG89IXo',
            widthPx: 4000,
            heightPx: 3000,
            authorAttributions: [
              {
                displayName: 'Sanchari Bhattacharjee',
                uri: 'https://maps.google.com/maps/contrib/100135820807374137460',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjXLV-ZOsSib1EhfK6mP8DiD12rEK8vL-u6uhpTxZYNkZntl4DCg=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhAGbwNQxxZw1mf_nmEABj4E&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhAGbwNQxxZw1mf_nmEABj4E!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
          {
            name: 'places/ChIJI_uzjBcXrjsRYJ-spWNxLYA/photos/ATKogpcJ_oXG5Z0tGJtiOyk6LcwMw-FizW8y4aFqF1klrEQSTTMylJP7IPLSl8Yv6sMwRBtsJg_llwtCN7gHA3E6xuLIV0f5vNfW1dvFOahkzN47Nfvh83Vcs4al4Tk5KwzGxJZXgEEzTjjUTyEJeWyCJ8ptHinDeUFyE_fk5D4NxXVlKfq-Rop4RAFfDeWR-FohZNM5TTEx92KJ4_uB_a1LwalDwEvxtkiKnWLTFiD1DBQ6zm_HRxoSOIx41dvPL8EXrB_-9HQS3bB3V-0V-LfBfMf1Pv6_FsNA4ROCCYiPGfdYv88fugB96rDx3Wtntdc0E5kjbCLcj3dOZU7utRybHpHOlT1iTEGfCRbvZX1v6KCHgsVeB1g7Me0Pg6XuFKI_NeOn0ess7YvhJtDocFYEIqNFubVCB8wHA01FWiwSHJ5Lg5zl',
            widthPx: 3029,
            heightPx: 2628,
            authorAttributions: [
              {
                displayName: 'Haren Vithaldas',
                uri: 'https://maps.google.com/maps/contrib/116270833799602444295',
                photoUri:
                  'https://lh3.googleusercontent.com/a/ACg8ocIs-MKl9rIE6oMAPrprMYFeiG2GpAjuQ0xcZqMGsC3DcbNFZg=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgMDooNHO0gE&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgMDooNHO0gE!2e10!4m2!3m1!1s0x3bae17178cb3fb23:0x802d7163a5ac9f60',
          },
        ],
      },
      {
        id: 'ChIJa96pe3wWrjsR0GMgr64hzXw',
        formattedAddress:
          '46/1, Cobalt, Church St, Haridevpur, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001',
        location: {
          latitude: 12.9756453,
          longitude: 77.60267999999999,
        },
        rating: 4.2,
        userRatingCount: 16207,
        iconMaskBaseUri: 'https://maps.gstatic.com/mapfiles/place_api/icons/v2/restaurant_pinlet',
        displayName: {
          text: 'Church Street Social',
          languageCode: 'en',
        },
        photos: [
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpcqhRMyaHrO0sebev_5mFWeBcE6QFV18ux8NkGHYe3KSg5gelZwlVI_1pgTepnhSt9gQ0y52f548Pyx7IzE6YgIc6Q_VjQsY3y7rIB01UAXtfwEndpohLySszyQOVxvWslwDGwaikNrBOcxvHZHUhfczSYnrg1Xx3CQSoBD65tVh4EmS6yozgULoQP08143RCAdxuLGk1r_Nv6y1SDR3_N5GaP2q3Y-qB6rNz6OEibH6Pghgf1Fv0beNYmkFnqD9ZcLfewq_bfebHH8GO2CKum0cCLAo1LRTS5Ema_yg62APA',
            widthPx: 864,
            heightPx: 576,
            authorAttributions: [
              {
                displayName: 'Church Street Social',
                uri: 'https://maps.google.com/maps/contrib/109938214158039360635',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjVwOUd_AXJkWxDMk8sjvOaDY01QsBmBp5qNSIbgXq-K13oDei_r=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipNQwdtf63GUL_ImVIQPEIr4kRO0I30dfgw3RBuE&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipNQwdtf63GUL_ImVIQPEIr4kRO0I30dfgw3RBuE!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpdsIFIGwEucAFy0-jWEWnjCKsSwpXjhfVMfPuftQYag4D7HwfQDRetl06vBwFEVZ3BXewjGl2PZYR4MQd9cvzgwYotxq8Pe8KcVfOLVThs4WcbRWX2gnEc2JXEBWVNK88u0SIrYwfmAvZlHqpuHl_ISPChTJ8SQp8RyHNCfcn2PxNhxOyqAn8F66_4iPHue76OIhg1QyuyYgjcBcQM3sdgBU01sYCqs3n64e2RaWHHPBiZxSUf81d9CZS-RpMPlyhb5bC9rJwUA7nfXrqA1WW6bcZStpSmz90kt2dJE8JVzbA',
            widthPx: 1037,
            heightPx: 692,
            authorAttributions: [
              {
                displayName: 'Church Street Social',
                uri: 'https://maps.google.com/maps/contrib/109938214158039360635',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjVwOUd_AXJkWxDMk8sjvOaDY01QsBmBp5qNSIbgXq-K13oDei_r=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sAF1QipMNT34pvcALNpxGcDvUdjj7qXstR2TZxBCkwfS5&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sAF1QipMNT34pvcALNpxGcDvUdjj7qXstR2TZxBCkwfS5!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpfoDgLlKN2VZ2vTs6ausQk6Ds0I1qsHDVcRjjz_XfZSMTUMI3EQfdoAQ-Z49nmpVh-zG3rMtv2tmzvwBPQZLv4Dvdb4aGvNhIfPgxvWQ4rhIzJ6RSj3OgldR8Ih8HKuNLbgo_2fX-voyz2TNip6Gd4UA3H_dKxBQeQ1QhnmtVeAxDBp1SrCzMA6HjHeEbnmjWHLdQACq5MFr0KMKEPd2j0BK2yuOtHI2cZYQwuzR_fOkbLYWdNOIP7tvaGMp3uSOh2mf2XS5jzmOArJHs6LvaAWhROYyunYS4rF-_GsKEacbP7-eh8AMxqzA_TGnyaEbQxw2Zk3XzyH0j8JMzzlU3Rwx8Dh1W7GfVXg5c-RyObTRUDjrXePMrBPqgZByhgRBKHsKYG0x5f8HxxsGEk9fcyQ_4pCCbUyJtIezpjD3F1dyD3Z',
            widthPx: 3072,
            heightPx: 4080,
            authorAttributions: [
              {
                displayName: 'Navin Emmadi',
                uri: 'https://maps.google.com/maps/contrib/112285966778484748686',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjU1_PmpmNI2FBLbA8xIaJSOYihKzXKRKtv-JQ3f7DCwnYqKISr5=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDvw5bmkgE&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDvw5bmkgE!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpc-GDJ2vHC5EquWs9fW362YqG2kiJJd6XhScsNOr4nOIUprMbfbSZnOwRh5nPX_NbYN3ntn7qtjOHOk2fRdTFolbNmf8BJU-8Rn-hubNWgMMlQGqlvafSbGuraazZIOmeRV0SM7vhIjqQFDs_1ZU_l2zu4IwbeXSRpylbIrDVEwxuEl_zICvr1_ckFXeUUINgzAfXpyCNmBhDt-0AgoqnFK0M8L2ouJVeC8hry4K3lVUMEQj_RWz7v66gBmcFBro3jMlXRv8vJMjurv5ss0JNwA1SCnLFdGdvfGakE7ScsQAXjVbeHdAfNxIKNuJYXRYM-cKhSfYgJaatF0bZr1huRtrwwtnfI5uLpGDRmsoNLjGMf8gI7XSR2USO5YmaMWto87XQxc-w0RnUGMxSnIe1LQO5opTXftYneV_2Ld68Ug7w',
            widthPx: 4032,
            heightPx: 3024,
            authorAttributions: [
              {
                displayName: 'keerthan sathya',
                uri: 'https://maps.google.com/maps/contrib/100330411802112023946',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjVNr2h9NDtK-9RNh8olvB-hB_e9C94Fn-O-CXdulQ4bdekNaaRs=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgID46OmfaQ&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgID46OmfaQ!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpeKc0o1S5R9u2Qp5Ycz3EH0nSqEz_1ZV9aPTIlR7Tejcx7WiwZofZHRvrpEa3DQffdS2W0Ahz1hIBsMnC1yXmk7rdaLw-N5J44Mqssv1tVVcW_v9FfRAAeakdboGrGqdCQaowDsdn-pwO1QPX47eZxbBTEGzlVbjrsObvm6oNA8qSZ_s2EzcR1cunQu_ca_OHpYcnPefO_lelzvySyklNHD1O1lpDjbEBg8X-Nerj6MEczO_-mj4uE73WML2S0Sf4IAY15OGr9sIp5riuf3_4WBD4QaIf4i9uvV-ww0rvK67746kLPTnigUXmsSTioIjTtTqoOWLeyJsA4fHFo3dQ3jKvqS7ZLpPID2pghR5J0GaNxrm9sIMhUW09o8vt8b86gxP5-EONYOTKaTM9LHg3nQ4xvzlv_ceME-k6HNhQ0',
            widthPx: 4032,
            heightPx: 3024,
            authorAttributions: [
              {
                displayName: 'Sholden Singh',
                uri: 'https://maps.google.com/maps/contrib/114467668455556954952',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjXYihoKS2kepXETqemABGKgva-sSP7eu9s8KbLwbwjrw9Uu4VovLg=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDEmOyjQA&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDEmOyjQA!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpdPcOhppx4sxJybS3kzKImPKwYtwoftfscxB6FEIvdOKMSX8Zh-U3P2q-D1GD8ElXUtANicXB4olpMh3Vqf6499c8v5NgqZ0EOD2wFQHW6jRWMDn_usIMjGVmOac1-hdCOu7BPtjuxHyH619YlVasIhcoENicsZ-xv8-qh2zrCsvgv-oS4OViRgTGT1kxFhhYIRhzqOqPf2WLTEZW4XcGJCbEMUc8zeHGMQyLO5QC1NptbLipPH9_nA9mG_JkKO3c5BFRBWC_aKw_0OmgH1oSeBN97llEc1AJkJGSfvFjn9TtvFgcOLtM6NukpwjXKY3kLMuj4tdL2mAAflrwbOwT84ERu61Ly69i5i8Av0aQmTCbGfRV4in-OVhAPRHxlMRXB3uPl4oWH-a32eypSYZzNhn85ePk3NmazZQn3NV31zJA',
            widthPx: 3000,
            heightPx: 4000,
            authorAttributions: [
              {
                displayName: 'Sonal Mishra',
                uri: 'https://maps.google.com/maps/contrib/109023106272281071673',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjXQv1iO1nDN3kpvylwuTIb9qG_WOFT9qmwXcwqdoHhbFKGgEJJHCg=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgIDvydWhXA&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgIDvydWhXA!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpdOEiyp0b8CDwbNL2Rpvmh9jf5w6H7NqSGuGR5cRxqh2szhTcG-rsU61cx3IH2MD9nFGW00mCWJQb8SZzxTiHW4O7tp0gfuD0M_U_nGQCg3k6cqFYh4NpwnkQPIm_XOGjV-kYTILNRIicP60BdguRBIoN3v6ONRfmjY5cHNQOw7qHwfYvLb64WOF7GJSkHK6MLZTJqkVWX-ePcheZDwESzBlIB0iCisDJQuJIGu6Vf9vJlWv2_90Pt8zh-EB1tBhdyYA3RpyAocOuJGqIB2_rDubudY8aZ_-S11v4GpM0ilSPsmBZvbx664ze5sl8C_dYOf57hE6WB-f2nEJgfINOmilev_Vl_Nx1zB_yuwcj8Kg3m6f0cYbuD0pH-dhruz7NrvDXOvfmLudrK-8ktaa1H-IJGJL6vBv3Y23Haa4X_xNYcA_j5lHLbJBSDqIFLK',
            widthPx: 4000,
            heightPx: 2252,
            authorAttributions: [
              {
                displayName: 'Vipul Agrawal',
                uri: 'https://maps.google.com/maps/contrib/116592403890252794211',
                photoUri:
                  'https://lh3.googleusercontent.com/a/ACg8ocKBnAN2pMBsahbZmXAA6jY020VQa-J9ifbkxPYtjkFtwIakS8w=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhCjEDSUEfiKGvuOSefxZ3vJ&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhCjEDSUEfiKGvuOSefxZ3vJ!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpdO5Xd61zIVKkORfjRPxFroqovrdUByA1BxYTMc6t2cfOGrHI8JVxq5KQyDs4lIjOZeKZU_fr6m2JYSjIe4TlD0pQRdeiuAlnnskNK1MpiE8BjPeH2FXx3aXhV7MEX9-3mbYg2Xl70SCv_GHuvGGpfH58DATRacTpLOdHGDJMnm_PU-Av00frUcbSHOzAXz24Ev_1OWW9jZ9aKVcFQTvrMvnO_OKdNN97wkryhUrL7AmNWuGB8UexDnpwBVFFc7iInEqmKlv4fWIz7MxPMC2Lk8zR91zZswErLeLfia2S-XTGeOgNLaaqETKBAxeZfAqZt3f97KnPX96hcy1ivTrSOKsYFuJpUgl1iZPA1muuQ9d9bHeWZTVnJkGkhuVX9ufReKnhGBq2pRLHEWJavKvaFNIjuDsuU0U9c1Z2ZeypmeGsAuwJh5mOJXH7I_Zwcm',
            widthPx: 1220,
            heightPx: 1378,
            authorAttributions: [
              {
                displayName: 'Abhiraj Cr',
                uri: 'https://maps.google.com/maps/contrib/107339968817435719325',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjVV594DSP_LLdnI7ecfaxVt0ynF4KWO6vKANyX7thVqG3il3NjK=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhCv4I4pETrAO6Ixb60DjoA_&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhCv4I4pETrAO6Ixb60DjoA_!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpersEHFXj4EZrVuktJ2XRhsYWrpZ7mGNLcJGoXQ3VCPm1QixkFhZN4NnCdkOggO81OXEoT7ebYcLKxDIB5CRHZkstNavil5aiYjk9cRHFLmV9hDr9-SbB3l5ao0rIWi-2i-z82e2tvaqX_C-Qzzv5qC6HqLSMQQAX3lgs4vCGoE4aTDOvJTN0y_-R0ySEfPCavjbKvquLeWoYGz1xSTL9Oa7wZSsDQJamY9fVplWSyRIkaP3KY293FzMVY2jb4TvJaWSg9GwyaL9ceMiOW9FdcWgQpU3L41H39Cl4UvbvkXvwG4K5YBFxZjYsR1py1HsjM9t5LjNi5XgttbrlR7DN_T9u_Ao7fWSyQfOuHJxsQ2mDpgNSErZsAu7E81P4o7CRwxCqiIJ6kpgipRjUmlDEkAc9nYziH6-rqmL770ZYvfSaU',
            widthPx: 1280,
            heightPx: 960,
            authorAttributions: [
              {
                displayName: 'Navin Rao',
                uri: 'https://maps.google.com/maps/contrib/100737917184890228135',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjU8krIjwRorEsWfZhwJzOFAGW3zU1jgyy7PClXhzJiivh6x0fLt=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIHM0ogKEICAgICXhNbktwE&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIHM0ogKEICAgICXhNbktwE!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
          {
            name: 'places/ChIJa96pe3wWrjsR0GMgr64hzXw/photos/ATKogpdD1Xeb_MMu5it4yhsyxy329ry5gzOpZ1_TOcxGAfQBzxbgnUdPeNlh5nY-zh5IINEjp7Mjb1yscVRW65p_36v7wJlSn6XxbTJ3iYFhK56iacMYCWPsjKbrkCrwK5mVicpreeInarFv4LRyJsgQYTNkw00fW4FT1J0wRolk-NTGkusuPyw-F2niDgPdqiFSYkTDCmeivD5rKnJdVlN6IyNmyskcXwqyDt7Cw3P7pXiY-Q0Owzw2gwx4a0y-CFZhS9i54Y_QiqmkS42cXasMVxzkNX7Hnt69W2F1r0O4_a-wknQ_faNlhqqL3LgL237gg2Sjod26iJwlEW14hrSmNHX-icUu9zWHeaQQgQhP5I0v0kKeosFK2_EOKqAOWHc7m3QnXRHGdKL904pK4hAylkboN0rI8ryw0v0mLDPfw1UdZah--l6wLOuSXULZDkHP',
            widthPx: 1220,
            heightPx: 768,
            authorAttributions: [
              {
                displayName: 'Abhiraj Cr',
                uri: 'https://maps.google.com/maps/contrib/107339968817435719325',
                photoUri:
                  'https://lh3.googleusercontent.com/a-/ALV-UjVV594DSP_LLdnI7ecfaxVt0ynF4KWO6vKANyX7thVqG3il3NjK=s100-p-k-no-mo',
              },
            ],
            flagContentUri:
              'https://www.google.com/local/imagery/report/?cb_client=maps_api_places.places_api&image_key=!1e10!2sCIABIhDKB9oaqkKHHT9Yaa0zucsF&hl=en&gl=IN',
            googleMapsUri:
              'https://www.google.com/maps/place//data=!3m4!1e2!3m2!1sCIABIhDKB9oaqkKHHT9Yaa0zucsF!2e10!4m2!3m1!1s0x3bae167c7ba9de6b:0x7ccd21aeaf2063d0',
          },
        ],
      },
    ];

    // this.cafeService.getNearbyCafes(lat, lng).subscribe({
    //   next: async (response) => {
    //     this.cafes = response || [];
    //     this.loading = false;
    //   },
    //   error: (err) => {
    //     console.error(err);
    //     this.loading = false;
    //   },
    // });
  }
}
