<template>
    <DockLayout :class="[smallerLabels, 'modal']">
        <FlexboxLayout dock="top" class="departureOrArrival">
            <FlexboxLayout class="smaller-departureOrArrival">
                <Label :text="$props.time.modal.top.first" class="topLabel active" @tap=""/>
                <!--<Label :text="$props.time.modal.top.second" class="topLabel" @tap=""/>-->
            </FlexboxLayout>
        </FlexboxLayout>
        <FlexboxLayout dock="bottom" class="confirmOrDiscard">
            <Label class="btn discardBtn" @tap="discard" :text="$props.time.modal.bottom.leftBtn"/>
            <Label class="btn confirmBtn" @tap="confirm" :text="$props.time.modal.bottom.rightBtn"/>
        </FlexboxLayout>
        <FlexboxLayout dock="center" class="timeSettings">
            <FlexboxLayout class="timeSelect">
                <FlexboxLayout class="now">
                    <Button class="btn btn-sq btn-wt" @tap="setTimeToNow" :text="$props.time.modal.center.button"/>
                </FlexboxLayout>
                <TimePicker v-model="timeWeSelected"/>
            </FlexboxLayout>
            <FlexboxLayout class="dateTimeSelect">
                <FlexboxLayout class="dateTimeNav">
                    <Label class="fas" @tap="previousDay" :text="'\uf053' | unescape"/>
                    <FlexboxLayout class="timeStamp">
                        <Label class="" @tap="modalCalender" :text="$props.time.modal.center.date.actual"/>
                    </FlexboxLayout>
                    <Label class="fas" @tap="nextDay" :text="'\uf054' | unescape"/>
                </FlexboxLayout>
                <FlexboxLayout class="calenderView">
                    <Button class="btn btn-sq btn-wt far" @tap="modalCalender" :text="'\uf073' | unescape"/>
                </FlexboxLayout>
            </FlexboxLayout>
            <FlexboxLayout class="modelCalender" v-show="!showModelCalender">
              <DatePicker v-model="date" :minDate="minDate"/>
            </FlexboxLayout>
        </FlexboxLayout>
    </DockLayout>
</template>

<script>

    import handle from "../../assets/js/Vue/Modal/timeModal/handle"
    import moment from "moment"

    export default {
        props: ['time', 'formatTimeStampBasedOnLanguage', 'selectedTime'],
        created: function () {
          this.date = moment(this.$props.time.modal.center.date.today).toDate();
        },
        computed: {
            smallerLabels() {
                switch (this.$store.state.language) {
                    case 'RU':
                        return 'smallerLabels';
                    default:
                        return '';
                }
            }
        },
        data() {
            return {
                timeWeSelected: this.$props.selectedTime,
                date: this.$props.selectedDate,
                minDate: '06-13-2019',
                showModelCalender: false
            }
        },
        watch: {
          date: function (newVal, _) {
              this.$props.time.modal.center.date.today = moment(newVal).format();
              this.$props.time.modal.center.date.actual = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(this, this.$props.time.modal.center.date.today);
              this.time.date.show = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForShowingSelect(this, this.$props.time.modal.center.date.today);
              this.time.date.real = moment(this.$props.time.modal.center.date.today).locale('en').format('YYYYMMDD');
          }
        },
        methods: {
            setTimeToNow: function () {
                this.timeWeSelected = moment().toDate();
            },
            previousDay: function () {
                this.$props.time.modal.center.date.actual = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(this, moment(this.$props.time.modal.center.date.today).subtract(1, 'days'));
                this.$props.time.modal.center.date.today = moment(this.$props.time.modal.center.date.today).subtract(1, 'days');
                this.date = moment(this.$props.time.modal.center.date.today).toDate()
            },
            nextDay: function () {
                this.$props.time.modal.center.date.actual = this.$props.formatTimeStampBasedOnLanguage.formatTimeStampForModel(this, moment(this.$props.time.modal.center.date.today).add(1, 'days'));
                this.$props.time.modal.center.date.today = moment(this.$props.time.modal.center.date.today).add(1, 'days');
                this.date = moment(this.$props.time.modal.center.date.today).toDate();
            },
            modalCalender: function () {
                this.showModelCalender = !this.showModelCalender;
            },
            discard: function () {
                handle.discard(this);
                this.$emit('close');
            },
            confirm: function () {
                handle.save(this);
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../theme/generalStyles.scss";
    @import "../../theme/_variables.scss";

    .modal {
        background-color: $white;
        height: 400;
        width: 300;
        text-align: left;
        color: $dark;
    }

    /****** GENERATE FROM COMPUTED smallerLabels() ******/

    .smallerLabels.modal Label,
    .smallerLabels.modal .departureOrArrival .smaller-departureOrArrival .topLabel {
        font-size: 14;
    }

    .smallerLabels.modal .timeSettings .timeSelect .now Button {
        font-size: 12;
    }

    .timeSettings {
        flex-direction: column;
        width: 100%;
        height: 60%;

      .timeSelect {
        margin-top: 20;
        flex-direction: row;
        width: 40%;
        justify-content: center;

        TimePicker {
          width: 30%;
        }

        .now {
          flex-direction: column;
          align-self: center;
          width: 40%;
          margin-right: 10;

          Button {
            /*iOS*/
            width: 80%;
            margin-left: auto;
            margin-right: auto;
          }
        }
      }

      .dateTimeSelect {
        margin-top: 40;
        flex-direction: row;
        width: 100%;
        align-items: center;
        margin-left: 10;
        padding-bottom: 10;

        .dateTimeNav {
          flex-direction: row;
          justify-content: space-between;
          width: 80%;

          .fas {
            color: $primary;
          }

          .timeStamp {
            flex-direction: column;
            align-self: center;
          }
        }

        .calenderView {
          /*Android*/
          /*width: 20%;*/
          /*iOS*/
          width: 30%;
          height: 100px;

          .far {
            font-size: 20;
          }
        }
      }

      .modelCalender {
        flex-direction: row;
        margin-top: 10;

        DatePicker {
          width: 70%;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }

    .departureOrArrival {
        flex-direction: row;
        width: 100%;
        justify-content: center;

      .smaller-departureOrArrival {
        width: 80%;
        border-bottom-width: 3px;
        border-bottom-color: $white;
        border-bottom-style: solid;
        text-align: center;

        .topLabel {
          width: 50%;
          font-size: 18;
          padding-top: 15;
          padding-bottom: 15;
        }

        .active {
          border-bottom-width: 6px;
          border-bottom-color: $primary;
          border-bottom-style: solid;
        }
      }
    }

</style>
