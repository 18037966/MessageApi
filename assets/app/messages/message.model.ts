export class Message{
	content: string;
	username: string;
	messageId?: string;
	userId?: string;

	constructor(content: string, username: string, messageId?: string, userId?: string){ //to initalise this component we need to create a constructur
         this.content = content;
         this.username = username;
         this.messageId = messageId;
         this.userId = userId;

	}
}