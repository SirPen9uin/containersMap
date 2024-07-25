import ErrorRepository from "../user";

test('translate: complete', () => {
    const errorRepo = new ErrorRepository()
    errorRepo.errorStorage.set('404', 'Not found')
    const result = errorRepo.translate(404)
    expect(result).toBe('Not found')
})

test('translate: success', () => {
    const errorRepo = new ErrorRepository()
    errorRepo.errorStorage.set('500', 'Server error')
    const result = errorRepo.translate(500)
    expect(result).toBe('Server error')
})

test('translate: error', () => {
    const errorRepo = new ErrorRepository()
    errorRepo.errorStorage.set('404', 'Not found')
    expect(() => errorRepo.translate(405)).toThrow( new Error('Unknown error'))
})