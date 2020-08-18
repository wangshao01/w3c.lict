// 根据id找到字典对应的对象(单一id)
export function findSingleObj(arrs, key) {
  const item = arrs.find(item => {
    return item.attr === key
  })
  if (item === undefined) return ''
  return `${item.attr}:${item.name}`
}

// 根据id找到字典对应的对象(数组id)
export function findSomeObj(targetArr, keyArr) {
  if (targetArr === undefined) return ''
  if (keyArr === undefined) return ''
  const arr = []
  let obj = ''
  for (let i = 0; i < keyArr.length; i++) {
    obj = findSingleObj(targetArr, keyArr[i])
    arr.push(obj)
  }
  return arr
}

// 拆开时间
export function openTime(values) {
  if (values === undefined) return ''
  values.startTime = values.timeLimit[0]
  values.endTime = values.timeLimit[1]
}

// 筛选出上传的对象
export function uploadFilter(arr) {
  console.log(arr)
  if (arr === undefined) return ''
  return arr.map(x => {
    const obj = {}
    obj.url = x.response.data.url
    obj.fileName = x.response.data.fileName
    return obj
  })
}

// 回显操作

// 拆解单一字符串
export function getAttrValue(string) {
  if (string !== '') {
    const str_before = string.split(':')[0]
    return parseInt(str_before)
  } else {
    return ''
  }
}

// 拆解字符串数组
export function getAttrArrValue(arr) {
  if (arr !== '') {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
      newArr.push(arr[i].split(':')[0])
    }
    return newArr
  } else {
    return ''
  }
}

// 删除数组第一个元素
export function deleteArrFirst(arr) {
  const m = arr.slice(0)
  m.shift()
  return m
}

// 改变文件数组中key名称
export function changeArrJsonKeyName(arr) {
  arr.forEach(arrItem => {
    arrItem['name'] = arrItem.fileName
    delete arrItem.fileName
  })
  return arr
}
