/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridgeSize : 0,
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeSize) => {
      console.log(`다리의 길이: ${bridgeSize}`);
      this.bridgeSize = bridgeSize;
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (move) => {
      console.log(`이동할 칸: ${move}`);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      console.log(`answer: ${answer}`);
    });
  },
};


const MissionUtils = require("@woowacourse/mission-utils");
// InputView.readBridgeSize();
// InputView.readMoving();
// InputView.readGameCommand();

module.exports = InputView;
