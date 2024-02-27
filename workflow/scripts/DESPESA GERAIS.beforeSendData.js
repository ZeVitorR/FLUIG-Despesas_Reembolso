function beforeSendData(customFields,customFacts){
    customFields[0] =hAPI.getCardValue("origem");
	customFields[1] =hAPI.getCardValue("destino");
	customFields[1] =hAPI.getCardValue("solicitacao");
	
	customFacts[0]=java.lang.Double.parseDouble(hAPI.getCardValue("adiantamento"));
	customFacts[1]=java.lang.Double.parseDouble(hAPI.getCardValue("totalDespesas"));
	customFacts[2]=java.lang.Double.parseDouble(hAPI.getCardValue("liqReceberReebolsar"));
}
