import 'mocha'
import * as should from 'should'
import { listDiff, Patch, PatchType, applyPatches } from '../src/index'
import { getCount } from './util'

describe('增加/删除元素测试', function () {
    it('用例 - 增加、删除元素', function () {
        let a: string[]
        let b: string[]
        let patches: Patch[]

        a = ['1', '2', '3', '4', '5']
        b = ['1', 'a', 'b', '3', '5', 'c']
        patches = listDiff(a, b)
        should(getCount(patches, PatchType.DELETE)).be.equal(2)
        should(getCount(patches, PatchType.ADD)).be.equal(3)
        should(applyPatches(a, patches).join()).be.equal(b.join())

        a = ['1', '2', '3', '4', '5']
        b = ['a', 'b', '2', 'c', '4', 'd', 'e']
        patches = listDiff(a, b)
        should(getCount(patches, PatchType.DELETE)).be.equal(3)
        should(getCount(patches, PatchType.ADD)).be.equal(5)
        should(applyPatches(a, patches).join()).be.equal(b.join())
    })
})
