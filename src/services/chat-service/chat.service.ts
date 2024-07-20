import { accessApi } from "@/$api/axios.api";
import { Chat, CreateChat } from "@/shared/intreface/chat.intreface";

class ChatService {
  async getAllChat(): Promise<Chat[]> {
    const { data } = await accessApi<Chat[]>({
      method: "GET",
      url: "/chat/all",
    });
    return data;
  }
  async getChat(id: number): Promise<Chat> {
    const { data } = await accessApi<Chat>({
      method: "GET",
      url: `/chat/${id}`,
    });
    return data;
  }
	async createChat(chat: CreateChat): Promise<Chat> {
		const { data } = await accessApi<Chat>({
			method: "POST",
			url: "/chat/create-chat",
			data: chat,
		});
		return data;
	}
}

export default new ChatService();
