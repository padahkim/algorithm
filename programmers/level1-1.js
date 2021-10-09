/*
가운데 글자 가져오기

문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
입출력 예
s	return
"abcde"	"c"
"qwer"	"we"


問題の説明
単語の中で文字を返す関数、solutionを作成してください。単語の長さが偶数であれば、中で二つの文字を返すとします。

制限事項
sは、長さが1以上、100以下である文字列です。
入出力の例
s return
「abcde」「c」
「qwer "" we "
*/

function solution(s) {
  if (s.length%2 === 0) {
      return s.slice(s.length/2 - 1, s.length/2 + 1);
  }
  return s.slice(s.length/2, s.length/2 + 1);
}