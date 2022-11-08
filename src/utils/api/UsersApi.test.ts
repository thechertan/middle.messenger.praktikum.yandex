// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import sinon from 'sinon';
import {userAPI} from "./UsersApi";

describe('test chatsAPI', () => {
    let requests: any[] = [];
    const login: string = 'login'
    const id: number = 231312
    beforeEach(() => {
        const fakeXHR: sinon.SinonFakeXMLHttpRequestStatic = sinon.useFakeXMLHttpRequest();
        global.XMLHttpRequest = fakeXHR;
        requests = []
        fakeXHR.onCreate = (req: any) => {
            requests.push(req);
        };
    })
    
    test('should send post request from userAPI => getUser ', () => {
        userAPI.getUser(id)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('GET');
        expect(requests[0].url).toBe(`https://ya-praktikum.tech/api/v2/user/${id}`);
    })
    
    test('should send post request from userAPI => searchUsers ', () => {
        userAPI.searchUsers(login)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('POST');
        expect(requests[0].url).toBe(`https://ya-praktikum.tech/api/v2/user/search`);
    })
    
})