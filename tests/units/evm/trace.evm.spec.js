import { ethers } from 'ethers'
import { mock, resetMocks } from 'dist/esm/index.evm'
import { supported } from "src/blockchains"

describe('mock trace transaction', ()=> {

  supported.evm.forEach((blockchain)=>{

    describe(blockchain, ()=> {

      beforeEach(resetMocks)

      it('mocks traceTransaction', async ()=>{

        let mockedTransaction = mock({
          blockchain,
          transaction: {
            to: '0x5Af489c8786A018EC4814194dC8048be1007e390',
            from: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            value: "2000000000000000000"
          }
        })

        let mockedTrace = {
          from: '0xc215375ec78a0717ce90a96d45046aa9ebac2295',
          gas: '0x3ce59',
          gasUsed: '0x38edd',
          to: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
          input: '0xb7d29a3500000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000024000000000000000000000000000000000000000000000000000000000000002c000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000061ae3825302f10000000000000000000000000000000000000000000000000000013d65cd49e938000000000000000000000000000000000000000000000000000000000063e83f9e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d55e173788000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000c215375ec78a0717ce90a96d45046aa9ebac229500000000000000000000000071658dd40208b449f66fe7bc4fc947d79dae0e8200000000000000000000000048765a87b4aa74e312a68f5e09f4099fbf0611060000000000000000000000000000000000000000000000000000000000000003000000000000000000000000e04b08dfc6caa0f4ec523a3ae283ece7efe00019000000000000000000000000d8fbc10787b019fe4059eb5aa5fb11a5862229ef000000000000000000000000981cad45c768d56136fdbb2c5e115f33d971be6c0000000000000000000000000000000000000000000000000000000000000000',
          output: '0x0000000000000000000000000000000000000000000000000000000000000001',
          calls: [
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x3a986',
              gasUsed: '0x9c7d',
              to: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
              input: '0x23b872dd000000000000000000000000c215375ec78a0717ce90a96d45046aa9ebac2295000000000000000000000000ae60ac8e69414c2dc362d0e6a03af643d1d85b920000000000000000000000000000000000000000000000061ae3825302f10000',
              output: '0x0000000000000000000000000000000000000000000000000000000000000001',
              value: '0x0',
              type: 'CALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x301c7',
              gasUsed: '0xa2b',
              to: '0x6ef8833d250f2df4e7b66eca01ca5a0d2a34b2ff',
              input: '0x7445e0c3000000000000000000000000e04b08dfc6caa0f4ec523a3ae283ece7efe00019',
              output: '0x000000000000000000000000e04b08dfc6caa0f4ec523a3ae283ece7efe00019',
              type: 'STATICCALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x2f456',
              gasUsed: '0x25b',
              to: '0x6ef8833d250f2df4e7b66eca01ca5a0d2a34b2ff',
              input: '0x7445e0c3000000000000000000000000e04b08dfc6caa0f4ec523a3ae283ece7efe00019',
              output: '0x000000000000000000000000e04b08dfc6caa0f4ec523a3ae283ece7efe00019',
              type: 'STATICCALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x2e642',
              gasUsed: '0x142',
              to: '0xe04b08dfc6caa0f4ec523a3ae283ece7efe00019',
              input: '0xc89e4361',
              output: '0x0000000000000000000000000000000000000000000000000000000000000001',
              value: '0x0',
              type: 'CALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x2d74a',
              gasUsed: '0x1d415',
              to: '0xe04b08dfc6caa0f4ec523a3ae283ece7efe00019',
              input: '0xb8694959000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000061ae3825302f10000000000000000000000000000000000000000000000000000013d65cd49e938000000000000000000000000000000000000000000000000000000000063e83f9e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d55e173788000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000c215375ec78a0717ce90a96d45046aa9ebac229500000000000000000000000071658dd40208b449f66fe7bc4fc947d79dae0e8200000000000000000000000048765a87b4aa74e312a68f5e09f4099fbf0611060000000000000000000000000000000000000000000000000000000000000000',
              output: '0x0000000000000000000000000000000000000000000000000000000000000001',
              calls: [Array],
              value: '0x0',
              type: 'DELEGATECALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x1074d',
              gasUsed: '0xa2b',
              to: '0x6ef8833d250f2df4e7b66eca01ca5a0d2a34b2ff',
              input: '0x7445e0c3000000000000000000000000d8fbc10787b019fe4059eb5aa5fb11a5862229ef',
              output: '0x000000000000000000000000d8fbc10787b019fe4059eb5aa5fb11a5862229ef',
              type: 'STATICCALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0xf9dc',
              gasUsed: '0x25b',
              to: '0x6ef8833d250f2df4e7b66eca01ca5a0d2a34b2ff',
              input: '0x7445e0c3000000000000000000000000d8fbc10787b019fe4059eb5aa5fb11a5862229ef',
              output: '0x000000000000000000000000d8fbc10787b019fe4059eb5aa5fb11a5862229ef',
              type: 'STATICCALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0xebcb',
              gasUsed: '0xdf',
              to: '0xd8fbc10787b019fe4059eb5aa5fb11a5862229ef',
              input: '0xc89e4361',
              output: '0x0000000000000000000000000000000000000000000000000000000000000001',
              value: '0x0',
              type: 'CALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0xdd5d',
              gasUsed: '0x5613',
              to: '0xd8fbc10787b019fe4059eb5aa5fb11a5862229ef',
              input: '0xb8694959000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000061ae3825302f10000000000000000000000000000000000000000000000000000013d65cd49e938000000000000000000000000000000000000000000000000000000000063e83f9e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d55e173788000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000c215375ec78a0717ce90a96d45046aa9ebac229500000000000000000000000071658dd40208b449f66fe7bc4fc947d79dae0e8200000000000000000000000048765a87b4aa74e312a68f5e09f4099fbf0611060000000000000000000000000000000000000000000000000000000000000000',
              output: '0x0000000000000000000000000000000000000000000000000000000000000001',
              calls: [Array],
              value: '0x0',
              type: 'DELEGATECALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x8569',
              gasUsed: '0xa2b',
              to: '0x6ef8833d250f2df4e7b66eca01ca5a0d2a34b2ff',
              input: '0x7445e0c3000000000000000000000000981cad45c768d56136fdbb2c5e115f33d971be6c',
              output: '0x000000000000000000000000981cad45c768d56136fdbb2c5e115f33d971be6c',
              type: 'STATICCALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x77f9',
              gasUsed: '0x25b',
              to: '0x6ef8833d250f2df4e7b66eca01ca5a0d2a34b2ff',
              input: '0x7445e0c3000000000000000000000000981cad45c768d56136fdbb2c5e115f33d971be6c',
              output: '0x000000000000000000000000981cad45c768d56136fdbb2c5e115f33d971be6c',
              type: 'STATICCALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x69e8',
              gasUsed: '0xdf',
              to: '0x981cad45c768d56136fdbb2c5e115f33d971be6c',
              input: '0xc89e4361',
              output: '0x0000000000000000000000000000000000000000000000000000000000000001',
              value: '0x0',
              type: 'CALL'
            },
            {
              from: '0xae60ac8e69414c2dc362d0e6a03af643d1d85b92',
              gas: '0x5b78',
              gasUsed: '0x5a07',
              to: '0x981cad45c768d56136fdbb2c5e115f33d971be6c',
              input: '0xb8694959000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000e000000000000000000000000000000000000000000000000000000000000001a0000000000000000000000000000000000000000000000000000000000000022000000000000000000000000000000000000000000000000000000000000000020000000000000000000000007d1afa7b718fb893db30a3abc0cfc608aacfebb0000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee00000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000061ae3825302f10000000000000000000000000000000000000000000000000000013d65cd49e938000000000000000000000000000000000000000000000000000000000063e83f9e00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d55e173788000000000000000000000000000000000000000000000000000000000000000003000000000000000000000000c215375ec78a0717ce90a96d45046aa9ebac229500000000000000000000000071658dd40208b449f66fe7bc4fc947d79dae0e8200000000000000000000000048765a87b4aa74e312a68f5e09f4099fbf0611060000000000000000000000000000000000000000000000000000000000000000',
              output: '0x0000000000000000000000000000000000000000000000000000000000000001',
              calls: [Array],
              value: '0x0',
              type: 'DELEGATECALL'
            }
          ],
          value: '0x0',
          type: 'CALL'
        }
        
        mock({ blockchain, trace: {
          params: [mockedTransaction.transaction._id, {"tracer": "callTracer"}],
          return: mockedTrace
        }})
                
        let provider = new ethers.providers.Web3Provider(global.ethereum)

        const returnedTrace = await provider.send('debug_traceTransaction', [mockedTransaction.transaction._id, {"tracer": "callTracer"}])

        expect(returnedTrace).toEqual(mockedTrace)
      })

      it('raises because trace needs to be mocked', async ()=>{

        let mockedTransaction = mock({
          blockchain,
          transaction: {
            to: '0x5Af489c8786A018EC4814194dC8048be1007e390',
            from: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
            value: "2000000000000000000"
          }
        })

        let provider = new ethers.providers.Web3Provider(global.ethereum)

        console.log('expect', `Web3Mock: Please mock the trace request: {\"blockchain\":\"${blockchain}\",\"trace\":{\"params\":[\"${mockedTransaction.transaction._id}\",{\"tracer\":\"callTracer\"}],\"return\":\"YOUR_TRACE_OBJECT\"}}`)
        expect(()=>{
          provider.send('debug_traceTransaction', [mockedTransaction.transaction._id, {"tracer": "callTracer"}])
        }).toThrowError(
          `Web3Mock: Please mock the trace request: {\"blockchain\":\"${blockchain}\",\"trace\":{\"params\":[\"${mockedTransaction.transaction._id}\",{\"tracer\":\"callTracer\"}],\"return\":\"YOUR_TRACE_OBJECT\"}}`
        )
      })
    })
  })
})
