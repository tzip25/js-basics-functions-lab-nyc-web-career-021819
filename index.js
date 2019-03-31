// Code your solution in this file!

function distanceFromHqInBlocks(block) {
  if (block < 42) {
    result = 42 - block
  } else {
    result = block - 42
  }
  return result
}

function distanceFromHqInFeet(block) {
  result = distanceFromHqInBlocks(block) * 264
  return result
}

function distanceTravelledInFeet(start, end) {
  if (start > end){
    result = start - end
  } else {
    result = end - start
  }
  result = result * 264
  return result
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination)
  if ( distance < 400) {
    result = 0
  } else if (distance >= 400 && distance < 2000) {
    result = (distance - 400) * .02
  } else if (distance > 2000 && distance < 2500) {
    result = 25
  } else if (distance > 2500) {
    result = 'cannot travel that far'
  }
  return result
}
