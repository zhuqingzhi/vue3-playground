export function useDog() {
  const dogList = ref([]);
  const fetchList = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: "Buddy",
            age: 2,
            id: "1",
          },
        ]);
      }, 1000);
    });
  };
  const deleteDog = (id: String) => {
    dogList.value = dogList.value.filter((item: DogItem) => item.id !== id);
  };
  const getDogInfo = (id: String) => {
    return dogList.value.find((item: DogItem) => item.id === id);
  };
  const fetchDogList = () => {
    fetchList().then((res) => {
      dogList.value = res;
    });
  };
  return {
    dogList,
    deleteDog,
    getDogInfo,
    fetchDogList,
  };
}
