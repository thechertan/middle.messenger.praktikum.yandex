// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import sinon from 'sinon';
import {chatsAPI} from "./ChatApi";

describe('test chatsAPI', () => {
    let requests: any[] = [];
    let data: number | string;
    const users: number = 12312
    const chatId: number = 231312
    beforeEach(() => {
        const fakeXHR: sinon.SinonFakeXMLHttpRequestStatic = sinon.useFakeXMLHttpRequest();
        global.XMLHttpRequest = fakeXHR;
        requests = []
        fakeXHR.onCreate = (req: any) => {
            requests.push(req);
        };
    })
    
    test('should send post request from chatsAPI => getChats ', () => {
        chatsAPI.getChats()
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('GET');
        expect(requests[0].url).toBe('https://ya-praktikum.tech/api/v2/chats');
    })
    
    test('should send post request from chatsAPI => createChat ', () => {
        const data: string = 'newChat'
        chatsAPI.createChat(data)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('POST');
        expect(requests[0].requestBody).toEqual(JSON.stringify({title: data}));
        expect(requests[0].url).toBe('https://ya-praktikum.tech/api/v2/chats');
    })
    
    test('should send post request from chatsAPI => deleteChat ', () => {
        data = 12312
        chatsAPI.deleteChat(data)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('DELETE');
        expect(requests[0].requestBody).toEqual(JSON.stringify({chatId: data}));
        expect(requests[0].url).toBe('https://ya-praktikum.tech/api/v2/chats');
    })
    
    test('should send post request from chatsAPI => getChatUsers ', () => {
        data = 12312
        chatsAPI.getChatUsers(data)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('GET');
        expect(requests[0].url).toBe(`https://ya-praktikum.tech/api/v2/chats/${data}/users`);
    })
    
    test('should send post request from chatsAPI => addUsersToChat ', () => {
        chatsAPI.addUserToChat(users, chatId)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('PUT');
        expect(requests[0].requestBody).toEqual(JSON.stringify({"users": [users], "chatId": chatId}));
        expect(requests[0].url).toBe(`https://ya-praktikum.tech/api/v2/chats/users`);
    })
    
    test('should send post request from chatsAPI => deleteUserFromChat ', () => {
        chatsAPI.deleteUserFromChat(users, chatId)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('DELETE');
        expect(requests[0].requestBody).toEqual({"chatId": chatId, "users": [users]});
        expect(requests[0].url).toBe(`https://ya-praktikum.tech/api/v2/chats/users`);
    })
    
    test('should send post request from chatsAPI => getChatToken ', () => {
        chatsAPI.getChatToken(chatId)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('POST');
        expect(requests[0].url).toBe(`https://ya-praktikum.tech/api/v2/chats/token/${chatId}`);
    })
    
    test('should send post request from chatsAPI => changeChatAvatar ', () => {
        const imageData: any = [
            [0xFF0000FF, 0xFF0000FF, 0xFF0000FF],
            [0xFF0000FF, 0x00FF00FF, 0xFF0000FF],
            [0xFF0000FF, 0xFF0000FF, 0x0000FFFF]
        ];
        const formData = new FormData();
        formData.append("avatar", imageData);
        chatsAPI.changeChatAvatar(formData)
        expect(requests.length).toBe(1);
        expect(requests[0].method).toBe('PUT');
        expect(requests[0].url).toBe(`https://ya-praktikum.tech/api/v2/chats/avatar`);
    })
    
})