/*
 * @Author: czj
 * @Date: 2021-05-10 11:08:27
 * @LastEditors: czj
 * @LastEditTime: 2021-05-10 11:08:57
 * @Description:
 */

/**
 * @param {string} [somebody] - Somebody's name.
 * @function test
 */
 function test(somebody) {
  if (!somebody) {
      somebody = 'John Doe';
  }
  console.log('Hello ' + somebody);
}
