import { classNames } from '../classNames';

describe('classNames', () => {
  test('with only one param', () => {
    expect(classNames('test-class')).toBe('test-class');
  });
  
  test('with additional class', () => {
    const expectedResult = 'test-class class1 class2';
    
    expect(classNames('test-class', ['class1', 'class2'])).toBe(expectedResult);
  });
  
  test('with mods', () => {
    const expectedResult = 'test-class class1 class2 hovered scrollable';
    
    expect(classNames('test-class', ['class1', 'class2'], {hovered: true, scrollable: true})).toBe(expectedResult);
  });
  
  test('with mods false', () => {
    const expectedResult = 'test-class class1 class2 hovered';
    
    expect(classNames('test-class', ['class1', 'class2'], {hovered: true, scrollable: false})).toBe(expectedResult);
  });
  
  test('with mods undefined', () => {
    const expectedResult = 'test-class class1 class2 hovered';
    
    expect(classNames('test-class', ['class1', 'class2'], {hovered: true, scrollable: undefined})).toBe(expectedResult);
  });
});
