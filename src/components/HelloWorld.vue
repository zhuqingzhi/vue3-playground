<template>
  <div class="">
    <el-row>
      <el-col :span="12">
        姓：<el-input v-model="name1" placeholder="请输入姓"></el-input>
      </el-col>
      <el-col :span="12">
        名：<el-input v-model="name2" placeholder="请输入名"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12"> 姓名：{{ fullname }} </el-col>
    </el-row>
    <ul>
      <li v-for="(dogItem, dogIndex) in dogList" :key="dogIndex">
        {{ dogItem.name }}---{{ dogItem.age }}
      </li>
    </ul>
    <el-button
      type="primary"
      size="small"
      @click="handleGetDogInfo"
    ></el-button>
    <div>{{ JSON.stringify(dogInfo) }}</div>
    <br />
    <span>{{ person.name }}----{{ person.age }}</span>
    <span>{{ info.name }}----{{ info.age }}</span
    ><button @click="change">改变</button>
    <button @click="changeText">改变字段</button><br />
    <button @click="trigger">触发</button><span>{{ text }}</span>
  </div>
</template>
<script setup lang="ts">
import { useDog } from "@/hooks/useDog";
import { useCustomRef } from "./customRef";
const name1 = ref("");
const name2 = ref("");
const fullname = computed(() => name1.value + name2.value);
const $emit = defineEmits(["loadedData"]);

const props = withDefaults(
  defineProps<{
    msg: string;
    age?: number;
  }>(),
  {
    msg: "hello",
    age: 18,
  }
);

onMounted(() => {
  console.log(props.msg, props.age);
});

setTimeout(() => {
  console.log("获取到数据");
  $emit("loadedData", 123);
}, 1000);
const { dogList, getDogInfo, fetchDogList } = useDog();
let dogInfo = ref(null);
onMounted(() => {
  fetchDogList();
});
const handleGetDogInfo = () => {
  dogInfo.value = getDogInfo("1")!;
};

const person = shallowRef({
  name: "zs",
  age: "11",
});
let info = shallowReactive({
  name: "lisi",
  age: 12,
});
const change = () => {
  person.value = {
    name: "ls",
    age: "22",
  };
  info = {
    name: "lisi2233",
    age: 12,
  };
};
const changeText = () => {
  person.value.name = "ww";
  info.name = "lisi22";
  console.log(person);
  console.log(info);
};
const text = useCustomRef(12333, 1000);
const trigger = () => {
  text.value = "trigger";
};
</script>
<style lang="scss" scoped></style>
