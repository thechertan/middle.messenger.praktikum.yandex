// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import sinon from 'sinon';
import authAPI from "./AuthApi";

describe('test authAPI', () => {
    let requests: any[] = [];
    beforeEach(() => {
        const fakeXHR: sinon.SinonFakeXMLHttpRequestStatic = sinon.useFakeXMLHttpRequest();
        global.XMLHttpRequest = fakeXHR;
        requests = []
        fakeXHR.onCreate = (req: any) => {
            requests.push(req);
        };
    })

    test('should send post request from authAPI => signIn ', () => {
        const data = {login: 'login', password: '123456'}
        authAPI.signIn(data)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('POST');
        expect(requests[0].requestBody).toBe(JSON.stringify(data));
        expect(requests[0].url).toBe('https://ya-praktikum.tech/api/v2/auth/signin');
    })

    test('should send post request from authAPI => signUp ', () => {
        const data = {
            first_name: 'Ivan',
            second_name: 'Ivanov',
            phone: '+79080444428121',
            login: 'SC',
            email: 'r@mail.ru',
            password: '21321edsa12321',
        };
        authAPI.signUp(data)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('POST');
        expect(requests[0].requestBody).toBe(JSON.stringify(data));
        expect(requests[0].url).toBe('https://ya-praktikum.tech/api/v2/auth/signup');
    })

    test('should send post request from authAPI => logout ', () => {
        authAPI.logout()
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('POST');
        expect(requests[0].url).toBe('https://ya-praktikum.tech/api/v2/auth/logout');
    })

    test('should send post request from authAPI => logout ', () => {
        authAPI.me()
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('GET');
        expect(requests[0].url).toBe('https://ya-praktikum.tech/api/v2/auth/user');
    })
})