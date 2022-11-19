/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridges: [],
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeSize) => {
      this.bridges = bridgeMaker.makeBridge(bridgeSize, generator.generate);
      console.log(this.bridges);
      const bridgeGame = new BridgeGame(this.bridges);
      bridgeGame.move();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridges, nowIndex) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (inputMove) => {
      OutputView.printMap(inputMove, bridges[nowIndex]);
      if(nowIndex === bridges.length-1){
        OutputView.printResult();
        return;
      }
      if(inputMove === bridges[nowIndex]) {
        this.readMoving(bridges, ++nowIndex);
      }
      this.readGameCommand();
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      if(answer === 'Q') {
        // OutputView.printResult();
        MissionUtils.Console.close();
      }
      if(answer === 'R') {
        this.readMoving(this.bridges, 0);
      }
    });
  },
};


const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const bridgeMaker = require('./BridgeMaker');
const generator = require('./BridgeRandomNumberGenerator');
const OutputView = require("./OutputView");
InputView.readBridgeSize();
// InputView.readBridgeSize();
// InputView.readMoving();
// InputView.readGameCommand();


module.exports = InputView;
