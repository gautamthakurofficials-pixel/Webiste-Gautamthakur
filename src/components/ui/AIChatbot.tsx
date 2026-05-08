import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles, User, ExternalLink, Calendar } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_INSTRUCTION = `You are "GT AI Advisor", a premium luxury real estate consultant assistant for Gautam Thakur Real Estate. 
You provide intelligent, professional, and sophisticated advice regarding real estate investments.
Your tone is premium, corporate, polite, and luxury investor-focused. 
You act as an international real estate consultancy standard assistant.
Ensure your answers are concise, clear, and focused on high-net-worth individual (HNI) and institutional investor needs.
Mention Gautam Thakur's expertise when relevant.
Key regions of expertise include Dubai, Dehradun, Chandigarh/Tricity, Goa, and NCR commercial projects.
Our Global Offices include:
- International Office: Floor 22, Court Tower, Marasi Drive, Business Bay, Dubai, UAE
- Main Office: CP 67 Mall, Sector 67, Mohali, Punjab
- Second Office: Pacific Golf, Rajpur Road, Dehradun, Uttarakhand
When users ask for consultation or contact info, provide them the official WhatsApp link (https://wa.me/916280131414) and recommend they book a consultation with Gautam Thakur.`;

const SUGGESTED_QUESTIONS = [
  "Best investment city in India?",
  "Dubai investment opportunities",
  "Luxury villas in Goa",
  "Commercial projects in NCR",
  "ROI in Dehradun properties",
  "Chandigarh investment growth",
  "Book consultation",
  "Contact Gautam Thakur"
];

interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: 'Welcome to Gautam Thakur Real Estate.\nHow can I assist you with your investment or property requirements today?',
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatSession, setChatSession] = useState<any>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  useEffect(() => {
    if (isOpen && !chatSession) {
      try {
        const session = ai.chats.create({
          model: "gemini-3-flash-preview",
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
          }
        });
        setChatSession(session);
      } catch (err) {
        console.error("Failed to initialize chat session", err);
      }
    }
  }, [isOpen, chatSession]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text.trim(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    if (text.toLowerCase().includes('book consultation') || text.toLowerCase().includes('contact')) {
        setIsLoading(false);
        setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            role: 'model',
            content: "You can book a consultation or reach out directly to Gautam Thakur's team via our official WhatsApp.",
        }]);
        return;
    }

    try {
      if (!chatSession) throw new Error("Chat session not initialized");

      const response = await chatSession.sendMessageStream({ message: text.trim() });
      
      const modelMessageId = (Date.now() + 1).toString();
      setMessages(prev => [...prev, { id: modelMessageId, role: 'model', content: '' }]);

      let fullText = '';
      for await (const chunk of response) {
        if (chunk.text) {
          fullText += chunk.text;
          setMessages(prev => 
            prev.map(msg => 
              msg.id === modelMessageId ? { ...msg, content: fullText } : msg
            )
          );
        }
      }
    } catch (error) {
      console.error("Error communicating with AI:", error);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'model',
        content: "I apologize, but I am currently unable to process your request. Please try again later or contact our team directly via WhatsApp.",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#05101a] to-[#020810] border border-gold/40 shadow-[0_0_30px_rgba(244,194,31,0.2)] hover:shadow-[0_0_40px_rgba(244,194,31,0.4)] transition-all duration-300 ${isOpen ? 'pointer-events-none opacity-0 scale-75' : ''}`}
      >
        <Sparkles className="absolute top-3 right-3 w-4 h-4 text-gold fill-gold animate-pulse" />
        <Bot className="w-8 h-8 text-gold" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] max-w-[400px] h-[80vh] max-h-[700px] rounded-[2rem] overflow-hidden flex flex-col bg-[#05101a]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-gradient-to-r from-gold/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center border border-gold/30 relative">
                  <Bot className="w-6 h-6 text-gold" />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#05101a]"></span>
                </div>
                <div>
                  <h3 className="text-white font-serif font-medium leading-none mb-1">GT AI Advisor</h3>
                  <p className="text-xs text-white/50 font-light">Luxury Real Estate Consultant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-gold/20 border border-gold/30' : 'bg-white/10 border border-white/20'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4 text-gold" /> : <Bot className="w-4 h-4 text-white" />}
                    </div>
                    <div className={`p-4 rounded-2xl ${msg.role === 'user' ? 'bg-gold/10 text-white border border-gold/20 rounded-tr-sm' : 'bg-white/5 text-white/90 border border-white/10 rounded-tl-sm'}`}>
                      <p className="text-sm font-light leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                      
                      {/* Interactive Triggers Check */}
                      {msg.role === 'model' && (msg.content.includes('WhatsApp') || msg.content.includes('consultation')) && msg.id !== 'welcome' && (
                        <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
                           <a href="https://wa.me/916280131414?text=Hello%20Gautam%20Thakur%2C%20I%20would%20like%20to%20know%20more%20about%20your%20real%20estate%20services%20and%20investment%20opportunities." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 transition-colors text-sm font-medium border border-[#25D366]/30">
                              Book via WhatsApp <ExternalLink className="w-3.5 h-3.5" />
                           </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[85%] flex-row">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-white/10 border border-white/20">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 rounded-tl-sm flex items-center gap-1.5 h-[52px]">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-2 h-2 bg-gold/70 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-2 h-2 bg-gold/70 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-2 h-2 bg-gold/70 rounded-full" />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Quick Questions (only show if no messages besides welcome or just short chat) */}
              {!isLoading && messages.length < 5 && (
                 <div className="mt-4 flex flex-wrap gap-2">
                   {SUGGESTED_QUESTIONS.map((q, idx) => (
                     <button
                       key={idx}
                       onClick={() => handleQuickQuestionClick(q)}
                       className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-light hover:bg-gold/10 hover:border-gold/30 hover:text-white transition-all text-left"
                     >
                       {q}
                     </button>
                   ))}
                 </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-white/10 bg-[#020810]/50">
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(inputValue);
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about properties, ROI, or markets..."
                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-10 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="w-12 h-12 rounded-full bg-gold text-black flex items-center justify-center shrink-0 hover:bg-white hover:scale-105 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:hover:bg-gold"
                >
                  <Send className="w-5 h-5 ml-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
