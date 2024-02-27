function beforeSendData(customFields,customFacts){
	customFields[0] =hAPI.getCardValue("Local");
	
	
	customFields[1] =hAPI.getCardValue("razaoSocial");
	
	customFacts[0]=java.lang.Double.parseDouble(hAPI.getCardValue("valorProcesso"));
}
