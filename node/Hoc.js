const fakeDataGenerator = () => ({
    timer: undefined,
    getData() {
        return ['hello', 'world'];
    },
    addChangeListener(handleChangeFun) {
        if (this.timer) {
            return;
        }
        this.timer = setInterval(() => {
            handleChangeFun();
        }, 2000)
    },
    removeChangeListener() {
        clearInterval(this.timer);
    }
});

const FakeDataForA = fakeDataGenerator();
console.log(FakeDataForA);

function Hoc() {
    return {};
}
console.log(Hoc() == Hoc());