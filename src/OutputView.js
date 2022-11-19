/**
 * 사용자에게 게임 진행 상황과 결과를 출력하는 역할을 한다.
 */
const OutputView = {
  nowBridge: [],
  /**
   * 현재까지 이동한 다리의 상태를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printMap(input, bridge) {
    const START = '[ ';
    const END = ' ]';
    const DELIMITER = ' | ';
    const SPACE = ' ';
    let answer = 'X';
    let firstLine;
    let secondLine;
    let line = 0;
    if(input === bridge) {
      answer = 'O';
    }
    if(input === 'D'){
      line = 1; // Down
    }

    if(this.nowBridge.length === 0) {
      if(line){
        firstLine = START+SPACE+END;
        secondLine = START+answer+END;        
      } else{
        firstLine = START+answer+END;
        secondLine = START+SPACE+END;
      }
      this.nowBridge.push(firstLine);
      this.nowBridge.push(secondLine);
    } else {
      // 뒤에 ' ]'만큼 자르고 ' | ' 넣고 다시 ' ]' 붙이기
      for(let i = 0; i < 2; i++) {
        if(i === line){
          this.nowBridge[i] = this.nowBridge[i].slice(0, -2) + DELIMITER + answer + END;
        } else {
          this.nowBridge[i] = this.nowBridge[i].slice(0, -2) + DELIMITER + SPACE + END;
        }
      }
    }

    for(let i = 0; i < 2; i++) {
      console.log(this.nowBridge[i]);
    }
  },

  /**
   * 게임의 최종 결과를 정해진 형식에 맞춰 출력한다.
   * <p>
   * 출력을 위해 필요한 메서드의 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  printResult() {},
};

const MissionUtils = require("@woowacourse/mission-utils");
// OutputView.printMap();
module.exports = OutputView;
