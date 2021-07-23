async function getInfos(arr) {
    for await (let i of arr) {
      getData(i)
    }
  }

function getData (d) {
    console.log(d);
}

getInfos();