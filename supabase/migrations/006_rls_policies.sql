-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_conversations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_proposals ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_views ENABLE ROW LEVEL SECURITY;

-- Users policies
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins can view all users" ON users
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

CREATE POLICY "Admins can manage all users" ON users
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- Sessions policies
CREATE POLICY "Users can view own sessions" ON sessions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own sessions" ON sessions
    FOR DELETE USING (auth.uid() = user_id);

-- Projects policies (public read for published, admin write)
CREATE POLICY "Public can view published projects" ON projects
    FOR SELECT USING (published = TRUE);

CREATE POLICY "Admins can manage projects" ON projects
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- Case Studies policies
CREATE POLICY "Public can view published case studies" ON case_studies
    FOR SELECT USING (published = TRUE);

CREATE POLICY "Admins can manage case studies" ON case_studies
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- Blog Posts policies
CREATE POLICY "Public can view published blog posts" ON blog_posts
    FOR SELECT USING (status = 'PUBLISHED');

CREATE POLICY "Admins can manage blog posts" ON blog_posts
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- Quote Requests policies
CREATE POLICY "Users can view own quotes" ON quote_requests
    FOR SELECT USING (
        auth.uid() = user_id OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

CREATE POLICY "Anyone can create quote requests" ON quote_requests
    FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Admins can manage all quotes" ON quote_requests
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- Contacts policies
CREATE POLICY "Admins can manage contacts" ON contacts
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

CREATE POLICY "Anyone can create contacts" ON contacts
    FOR INSERT WITH CHECK (TRUE);

-- Newsletter Subscribers policies
CREATE POLICY "Admins can manage subscribers" ON newsletter_subscribers
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

CREATE POLICY "Anyone can subscribe" ON newsletter_subscribers
    FOR INSERT WITH CHECK (TRUE);

-- Subscriptions policies
CREATE POLICY "Users can view own subscriptions" ON subscriptions
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all subscriptions" ON subscriptions
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- Payments policies
CREATE POLICY "Users can view own payments" ON payments
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all payments" ON payments
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- Subscription Plans (public read)
CREATE POLICY "Public can view active plans" ON subscription_plans
    FOR SELECT USING (active = TRUE);

CREATE POLICY "Admins can manage plans" ON subscription_plans
    FOR ALL USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- AI Conversations policies
CREATE POLICY "Users can view own conversations" ON ai_conversations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create conversations" ON ai_conversations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own conversations" ON ai_conversations
    FOR UPDATE USING (auth.uid() = user_id);

-- AI Messages policies
CREATE POLICY "Users can view messages in own conversations" ON ai_messages
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM ai_conversations WHERE id = conversation_id AND user_id = auth.uid())
    );

CREATE POLICY "Users can create messages in own conversations" ON ai_messages
    FOR INSERT WITH CHECK (
        EXISTS (SELECT 1 FROM ai_conversations WHERE id = conversation_id AND user_id = auth.uid())
    );

-- AI Proposals policies
CREATE POLICY "Users can view own proposals" ON ai_proposals
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all proposals" ON ai_proposals
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

-- Page Views policies
CREATE POLICY "Admins can view analytics" ON page_views
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'ADMIN')
    );

CREATE POLICY "System can insert page views" ON page_views
    FOR INSERT WITH CHECK (TRUE);